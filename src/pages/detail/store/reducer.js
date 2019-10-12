import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    title: '',
    content: '',
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL:
            return _change_detail(state, action);
        default:
            return state;
    }
}

const _change_detail = (state,action) => {
    console.log(action);
    return (
        state.merge({
            title: fromJS(action.title),
            content: fromJS(action.content),
        })
    )
};
