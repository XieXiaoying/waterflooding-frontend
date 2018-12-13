import update from 'react-addons-update';
import { SET_CURRENT_POINT } from './../constants/constants';
const initialState = {
    currentPoint: {},
    pointList: {
        'S99':{
            time: '2018/12/13 11:40:00'

        }
    }
};
export default function pipeReducer(state = initialState, action) {
    Object.freeze(initialState);
    switch(action.type) {
        case SET_CURRENT_POINT:
            return update(state, { currentPoint: { $merge: {name: action.name, x: action.x, y: action.y} } });
        default:
            return state;
    }
}