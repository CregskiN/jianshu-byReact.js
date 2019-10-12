import {actionTypes} from './index';
import axios from 'axios';

const _changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
    value: true
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data;
            if (result) {
                dispatch(_changeLogin())
            } else {
                alert('登陆失败');
            }
        })
    }
};

export const logout = () => ({
    type: actionTypes.CHANGE_LOGOUT,
    value: false,
});



export const accountChange = (newAccount) => ({
    type: actionTypes.CHANGE_ACCOUNT,
    newAccount
});

export const passwordChange = (newPassword) => ({
    type: actionTypes.CHANGE_PASSWORD,
    newPassword
});