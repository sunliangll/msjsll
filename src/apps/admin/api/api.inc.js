import _ from 'lodash';
import a from 'axios';
import {CancelToken} from 'axios';

const defaultExtraConfig = {
  method: 'POST',
  timeout: 30,
  baseURL: '/',
  onUploadProgress ({loaded, total}) {},
  onDownloadProgress ({loaded, total, lengthComputable}) {}
};

const globalConfig = {
  frameworkErrorCb: false
};

// Add a response interceptor
a.interceptors.response.use(function (response) {
  if (response && response['data'] && (!response['data']['success']) &&
    _.startsWith(response['data']['errorCode'], 'E-FW-') &&
    _.isFunction(globalConfig.frameworkErrorCb)) {

    globalConfig.frameworkErrorCb(response['data']['errorCode']);
  }
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export const setFrameworkErrorCb = (fn) => {
  if (_.isFunction(fn)) {
    globalConfig.frameworkErrorCb = fn;
  } else {
    globalConfig.frameworkErrorCb = false;
  }
};

export const request = (params, successCb, failureCb, extraConfig) => {
  let task = {}, config = _.defaultsDeep({
    params: params || {},
    cancelToken: new CancelToken(function (cancel) {
      task.cancel = cancel;
    })
  }, defaultExtraConfig);
  config = _.defaultsDeep(config, extraConfig || {});
  task.config = config;
  successCb = successCb || (() => {});
  failureCb = failureCb || (() => {});
  a(config).then((response) => {
    response = response.data;
    if (response.success) {
      successCb({response, data: response.data});
    } else if (!_.startsWith(response.errorCode, 'E-FW-') || (!_.isFunction(globalConfig.frameworkErrorCb))) {
      failureCb({response, errorCode: response.errorCode, errorData: response.errorData || []});
    }
  }).catch((error) => {
    if (a.isCancel(error)) {
      failureCb({errorCode: 'E-NO-API-001'});
    } else if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      failureCb({errorCode: 'E-NO-API-002'});
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      failureCb({errorCode: 'E-NO-API-003'});
    } else {
      // Something happened in setting up the request that triggered an Error
      failureCb({errorCode: 'E-NO-API-004'});
    }
  });
  return task;
};
