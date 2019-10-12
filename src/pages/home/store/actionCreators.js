import axios from 'axios';
import {actionTypes} from './index';



const _changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data;
            dispatch(_changeHomeData(result));
        }).catch(() => {
            console.log("未请求到home.json数据")
        });
    }
};

const _addHomeList = (result, nextPage) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    articleList: result.data,
    nextPage
});

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeListMore.json?page=' + page ).then((res) => {
            const result = res.data;
            dispatch(_addHomeList(result,page + 1));
        }).catch((err) => {
            console.log("未请求到homeListMore.json数据")
        })
    }
};

export const toggleTopShow = (show) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
});