import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store/index';
import {reducer as homeReducer} from '../pages/home/store/index';
import {reducer as detailReducer} from '../pages/detail/store/index';
import {reducer as loginReducer} from '../login/store/index';

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;