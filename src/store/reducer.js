import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store/index';
import {reducer as pageReducer} from '../pages/store/index';
/*import {reducer as homeReducer} from '../pages/home/store/index';
import {reducer as detailReducer} from '../pages/detail/store/index';
import {reducer as loginReducer} from '../pages/login/store/index';*/

const reducer = combineReducers({
    header: headerReducer,
    pages: pageReducer,
});

export default reducer;