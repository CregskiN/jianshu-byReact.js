import axios from 'axios';
import * as actionTypes from './actionTypes'


const _changeDetail = (title, content) => {
    return {
        type: actionTypes.CHANGE_DETAIL,
        title,
        content,
    }
};
export const getDetail = (id) => {
    console.log(id);
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(_changeDetail(result.title, result.content))
        }).catch(() => {
            alert("详情页请求失败");
        })
    }
};
