import {request} from "./api.inc";

export const getUserPermission = (successCb, failureCb) => {
  return request({}, successCb, failureCb, {url: 'm/auth/get_permissions'})
};