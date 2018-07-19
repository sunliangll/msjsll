import * as types from 'mutation-types'
import * as api from 'apps/console/api/account.api';

const state = {
    resetType: 0, //0-通过手机重置密码, 1-通过邮箱重置密码
    accountValidateStatus: 0, // 0-验证中 1-验证成功 2-验证失败
    accountInfo: false, // 当前用户信息
    resetStatus: 0, // 0-重置中，1-重置成功 2-重置失败
    resetFailureMsg: 0, //重置失败信息,
    resetGoPage: 0, //0 不跳转 1-跳转重置密码页面 2-跳转至登录界面
};

const getters = {
    resetType: state => state.resetType,
    resetStatus: state => state.resetStatus,
    accountMobile: state => state.accountInfo ? state.accountInfo['mobile'] : false,
};


const mutations = {
    [types.M_RESET_VIA_SMS]: state => state.resetType = 0,
    [types.M_RESET_VIA_EMAIL]: state => state.resetType = 1
};

const actions = {
    [types.A_RESET_VAI]: ([state], input) =>{
        state.accountValidateStatus = 0;
        if(state.resetType === 0){
            //手机验证
            api.resetViaSMS(input, ([data]) => {
                state.accountValidateStatus = 1;
                state.accountInfo = {
                    mobile: data['mobile']
                };
                state.resetGoPage = 1;
                state.resetFailureMsg = '';
            }, ([errorCode]) => {
                state.accountValidateStatus = 2;
                state.resetFailureMsg = errorCode;
                state.resetGoPage = 0;
            });
        }else{
            //邮箱验证
            api.resetViaEMAIL(input,() => {
                state.accountValidateStatus = 1;
                state.resetGoPage = 0;
                state.resetFailureMsg = '';
            },([errorCode]) => {
                state.accountValidateStatus = 2;
                state.resetFailureMsg = errorCode;
                state.resetGoPage = 0;
            })
        }
    },
    [types.A_RESET]: ({state}, input) => {
        state.resetStatus = 0;
        api.simpleReset(input, () => {
            state.resetStatus = 1;
            state.resetFailureMsg =  '';
            state.resetGoPage = 2;
        },([errorCode]) => {
            state.resetStatus = 2;
            state.resetFailureMsg = errorCode;
            state.resetGoPage = 0;
        })
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};