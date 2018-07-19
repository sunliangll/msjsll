/**
 * @project EIS
 * @file 用户账户数据
 *
 * @author Victor Zhang
 * @create 2017-09-17 15:32
 * @since 1.0.0
 */

import login from './account.login';
//import register from './account.register';

export default {
  namespaced: true,
  modules: {
    login,
    //register
  }
};