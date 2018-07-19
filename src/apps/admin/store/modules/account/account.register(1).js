import * as types from 'mutation-types';
import * as api from 'apps/console/api/account.api';

const state = {
    registerStatus: 0, // 0-等待用户输入、1-注册中、2-注册成功、3-注册失败、4-邮件发送中、5-邮件发送成功、6-邮件发送失败
    registerType: 0, // 0-手机注册、1-邮箱注册
    registerFailureMsg: '', // 注册失败信息
};

const getters = {
    registerType: state => state.registerType,
    registerByPhoneStatus: state => state.registerByPhoneStatus,
    registerByEmailStatus: state => state.registerByEmailStatus,
    registerStatus: state => state.registerStatus,
    registerFailureMsg: state => state.registerFailureMsg,
};

const mutations = {
    [types.M_REGISTER_VIA_PHONE]: state => state.registerType = 0,
    [types.M_REGISTER_VIA_EMAIL]: state => state.registerType = 1,
};

const actions = {
    [types.A_REGISTER]: ({state}, input) => {
        state.registerStatus = 1; // 注册中
        if (state.registerType === 0) { // 手机注册
            api.registerCheckSMS(input, () => {
                state.registerStatus = 2; // 注册成功
                state.registerFailureMsg = '';
            }, ({errorCode}) => {
                state.registerStatus = 3; // 注册失败
                state.registerFailureMsg = errorCode;
            });
        } else { // 邮箱注册
            state.registerStatus = 4; // 邮件发送中
            api.registerSendEmail(input, () => {
                state.registerStatus = 5; // 邮件发送成功
                state.registerFailureMsg = '';
            }, ({errorCode}) => {
                state.registerByEmailStatus = 6; // 邮件发送失败
                state.registerFailureMsg = errorCode;
            });
        }
    },
    [types.A_REGISTER_VIA_EMAIL_NEXT]: ({state}, input) => {
        state.registerStatus = 1; // 注册中
        api.registerViaEmailNext(input, () => {
            state.registerStatus = 2; // 注册成功
            state.registerFailureMsg = '';
        }, ({errorCode}) => {
            state.registerStatus = 3; // 注册失败
            state.registerFailureMsg = errorCode;
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};