import {fromJS} from 'immutable';
import {actionTypes} from './index';

const defaultState = fromJS({
    login: false,
    account: '',
    password: '',
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN:
            return state.set('login', fromJS(action.value));
        case actionTypes.CHANGE_LOGOUT:
            return state.set('login',fromJS(action.value));

        case actionTypes.CHANGE_ACCOUNT:
            return state.set('account',fromJS(action.newAccount));
        case actionTypes.CHANGE_PASSWORD:
            return state.set('password',fromJS(action.newPassword));
        default:
            return state;
    }
}