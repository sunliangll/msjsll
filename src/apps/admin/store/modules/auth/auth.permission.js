import * as types from './mutation-types';/*
import * as api from 'apps/console/api/auth.api';*/

let getMenu = (permissions, result = false) => {
  for (let i = 0, l = permissions.length; i < l; i++) {
    let permission = permissions[i];
    if (permission['menu'] === true && result === false) {
      result = []; // root found
      if (permission.children) {
        result = getMenu(permission.children, result);
      }
      return result;
    } else if (result !== false) {
      // sub-menu
      result.push({
        menu: permission.menu,
        name: permission.name,
        children: permission.children ? getMenu(permission.children, []) : false
      });
    } else if (permission.children) {
      // see if root is among the children
      result = getMenu(permission.children);
      if (result) {
        return result;
      }
    }
  }
  return result;
};

const state = {
  menu: [],
  permissionList: [],
  permissionLoadingStatus: 0, // 0-未加载，1-加载中，2-错误，3-加载完毕
  permissionLoadingErrorMsg: ''
};

const getters = {
  menu: state => state.menu,
  permissionList: state => state.permissionList,
  permissionLoadingStatus: state => state.permissionLoadingStatus,
  permissionLoadingErrorMsg: state => state.permissionLoadingErrorMsg
};

const actions = {
  [types.A_GET_PERMISSIONS]: ({state}, {forceRefresh} = {forceRefresh: false}) => {
    if (state.permissionLoadingStatus !== 1 &&
      (state.permissionLoadingStatus !== 3 || forceRefresh)) {

      state.permissionLoadingStatus = 1;
      api.getUserPermission(({data}) => {
        state.permissionList = data;
        state.menu = getMenu(data);
        state.permissionLoadingStatus = 3;
        state.permissionLoadingErrorMsg = '';
      }, ({errorCode}) => {
        state.permissionLoadingStatus = 2;
        state.permissionLoadingErrorMsg = errorCode;
      });
    }
  }
};

export default {
  state,
  getters,
  mutations: {},
  actions
};
