import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        
        case ActionTypes.ADD_COMMENT:
            let idAdd = action.payload;
            idAdd.id = state.comments.length;
            let newPayload = [...state, idAdd]
            return {...state, comments: newPayload};

        default:
            return state;
    }
};