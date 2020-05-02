import * as actionType from './actionTypes';
export const saveResult = (res) => {
    return {
        type: actionType.STORE_RESULT,
        result: res
    };
}
export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res))
        }, 2000);
    }
};
export const deleteResult = (resElId) => {
    return {
        type: actionType.DELETE_RESULT,
        resltElId: resElId
    };
};