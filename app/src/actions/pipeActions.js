import fetch from 'cross-fetch';
import { SET_CURRENT_POINT } from './../constants/constants';


export function setCurPoint(name, x, y) {
    return { type: SET_CURRENT_POINT, name, x, y }
  }
  export function asyncLoadPicsOfPoi() {
    return (dispatch) => {
        // API
        return fetch('http://localhost:3000/station/getAllSation', {
            method: 'GET'
        }).then(response => {
            return response.json();
        }).then(json => {
            if (json.status === 'success') {
                console.log(json.data);
                // dispatch(loadPoiDetai(poiIds, json.message));
            }
        }).catch(error => {
            /* 3. 倒霉催的，发报错action */
            // dispatch({
            //   type: LOAD_MORE_WORK,
            //   msg: error,
            // });
            console.log(error);
        });
    };
}