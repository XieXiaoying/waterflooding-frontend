import { combineReducers } from 'redux';
import pipeReducer from './pipeReducer';
const rootReducer = combineReducers({
    'pipe': pipeReducer
});
export default rootReducer;