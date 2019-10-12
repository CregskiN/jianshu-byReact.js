import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return _change_home_data(state, action);
        case actionTypes.ADD_ARTICLE_LIST:
            return _add_article_list(state, action);
        case actionTypes.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', fromJS(action.show));
        default:
            return state;
    }
}



const _change_home_data = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
    });
};

const _add_article_list = (state, action) => {
    return (
        state.merge({
            articleList: state.get('articleList').concat(fromJS(action.articleList)),//List方法，仅仅把数组最外层变为immutable数组，内层还是普通对象
            articlePage: fromJS(action.nextPage),
        })
    )
};
