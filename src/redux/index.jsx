import {combineReducers} from 'redux'
import storeQuanLySinhVienReducer from '../redux/reducers/QuanLySinhVien.reducer'

const rootReducer = new combineReducers({
    storeQuanLySinhVienReducer,
});
export default rootReducer;