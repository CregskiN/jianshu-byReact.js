import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable';


const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.merge({    //同时改变多个immutable对象性能更高
                list: action.data,
                totalPage:action.totalPage
            });  //不能把普通数组直接给immutable数组
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);

        default:
            return state;
    }


};
