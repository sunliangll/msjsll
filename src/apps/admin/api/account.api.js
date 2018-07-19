import {request} from "./api.inc";

export const getCurrentAccountInfo = (successCb, failureCb) => {
  return request({}, successCb, failureCb, {
    url: 'm/account/get_current_account_info'
  });
};

export const registerViaPhoneNumber = ({phoneNumber, smsVerifyCode, password}, successCb, failureCb) => {
  return request({phone_number: phoneNumber, sms_verify_code: smsVerifyCode, password}, successCb, failureCb, {
    url: 'm/account/register_via_phone_number'
  });
};

export const registerViaEmail = ({email, verifyCode, password}, successCb, failureCb) => {
  return request({email, verify_code: verifyCode, password}, successCb, failureCb, {
    url: 'm/account/register_via_email'
  });
};

export const finishRegistration = ({uuid}, successCb, failureCb) => {
  return request({uuid}, successCb, failureCb, {
    url: 'm/account/finish_registration'
  });
};

export const simpleLogin = ({accountName, password, verifyCode, rememberMe}, successCb, failureCb) => {
  return request({account_name: accountName, password, verify_code: verifyCode, remember_me: rememberMe}, successCb, failureCb, {
    url: 'm/account/simple_login'
  });
};

export const loginViaSMS = ({phoneNumber, smsVerifyCode, rememberMe}, successCb, failureCb) => {
  return request({phone_number: phoneNumber, sms_verify_code: smsVerifyCode, remember_me: rememberMe}, successCb, failureCb, {
    url: 'm/account/sms_login'
  });
};

export const startResetPassword = ({resetBy, credential}, successCb, failureCb) => {
  return request({reset_by: resetBy, credential}, successCb, failureCb, {
    url: 'm/account/reset_password_request'
  });
};

export const finishResetPassword = ({token, password}, successCb, failureCb) => {
  return request({token, password}, successCb, failureCb, {
    url: 'm/account/reset_password'
  });
};

export const logout = ({}, successCb, failureCb) => {
  return request({}, successCb, failureCb, {
    url: 'm/account/logout'
  });
};

export const isUsernameDuplicated = ({username}, successCb, failureCb) => {
  return request({username}, successCb, failureCb, {
    url: 'm/account/is_username_duplicated'
  });
};

export const setUsername = ({username}, successCb, failureCb) => {
  return request({username}, successCb, failureCb, {
    url: 'm/account/set_username'
  });
};

export const secondVerifyViaEmail = ({email, todo, verifyCode}, successCb, failureCb) => {
  return request({email, todo, verify_code: verifyCode}, successCb, failureCb, {
    url: 'm/account/second_verify_via_email'
  });
};

export const secondVerifyViaPhoneNumber = ({phoneNumber, todo, smsVerifyCode}, successCb, failureCb) => {
  return request({phone_number: phoneNumber, todo, sms_verify_code: smsVerifyCode}, successCb, failureCb, {
    url: 'm/account/second_verify_via_phone_number'
  });
};

export const bindPhoneNumber = ({phoneNumber, smsVerifyCode, uuid}, successCb, failureCb) => {
  return request({phone_number: phoneNumber, sms_verify_code: smsVerifyCode, uuid}, successCb, failureCb, {
    url: 'm/account/bind_phone_number'
  });
};

export const unbindPhoneNumber = ({uuid}, successCb, failureCb) => {
  return request({uuid}, successCb, failureCb, {
    url: 'm/account/unbind_phone_number'
  });
};

export const startBindEmail = ({email, verifyCode, uuid}, successCb, failureCb) => {
  return request({email, verify_code: verifyCode, uuid}, successCb, failureCb, {
    url: 'm/account/bind_email'
  });
};

export const finishBindEmail = ({uuid}, successCb, failureCb) => {
  return request({uuid}, successCb, failureCb, {
    url: 'm/account/bind_email_confirm'
  });
};

export const unbindEmail = ({uuid}, successCb, failureCb) => {
  return request({uuid}, successCb, failureCb, {
    url: 'm/account/unbind_email'
  });
};

export const sendVerifyCode = ({phoneNumber, captcha}, successCb, failureCb) => {
  return request({phone_number: phoneNumber, captcha}, successCb, failureCb, {
    url: 'm/account/send_verify_code'
  });
};