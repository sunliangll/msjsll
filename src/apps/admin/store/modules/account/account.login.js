import * as types from './mutation-types';
import * as api from '../../../../admin/api/account.api';

const state = {
  accountInfo: false, // 当前用户信息
  loginType: 0, // 0-通过密码登录、1-通过短信验证码登录
  loginStatus: 0, // 0-获取当前用户登录信息、1-等待用户输入、2-登录中、3-登录失败、4-登录成功
  loginFailureMsg: '未知错误'//, // 登录失败信息
};

const getters = {
  loginType: state => state.loginType,
  loginStatus: state => state.loginStatus,
  loginFailureMsg: state => state.loginFailureMsg,
  accountUsername: state => state.accountInfo ? state.accountInfo['username'] : false,
  accountMobile: state => state.accountInfo ? state.accountInfo['mobile'] : false,
  accountEmail: state => state.accountInfo ? state.accountInfo['email'] : false,
};

const mutations = {
};

const actions = {
  [types.A_LOGIN]: ({state}, input) => {
    state.loginStatus = 2;
    if (state.loginType === 0) {
      api.simpleLogin(input, ({data}) => {
        state.loginStatus = 4;
        state.accountInfo = {
          username: data['username'],
          mobile: data['mobile'],
          email: data['email'],
        };
        state.loginFailureMsg = '';
      }, ({errorCode}) => {
        state.loginStatus = 3;
        state.accountInfo = false;
        state.loginFailureMsg = errorCode;
      });
    }/* else {
      api.loginViaSMS(input, ({data}) => {
        state.loginStatus = 4;
        state.accountInfo = {
          username: data['username']['value'],
          usernameEditable: data['username']['extra_info']['editable'],
          mobile: data['mobile'],
          email: data['email'] ? data['email']['value'] : false,
          emailAvailable: data['email'] ? data['email']['available'] : false
        };
        state.loginFailureMsg = '';
      }, ({errorCode}) => {
        state.loginStatus = 3;
        state.accountInfo = false;
        state.loginFailureMsg = errorCode;
      });
    }*/
  },
  [types.A_GET_CURRENT_ACCOUNT_INFO]: ({state}) => {
    state.loginStatus = 0;
    api.getCurrentAccountInfo(({data}) => {
      state.loginStatus = 4;
      state.accountInfo = {
        username: data['username'],
        mobile: data['mobile'],
        email: data['email'],
      };
      state.loginFailureMsg = '';
    }, () => {
      state.loginStatus = 1;
      state.accountInfo = false;
      state.loginFailureMsg = '';
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
