import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        
        case ActionTypes.ADD_COMMENT:
            let idAdd = state.comments.length;
            let newPayload = Object.assign({}, action.payload, {
                id: idAdd
            });
            let newComments = [...state.comments, newPayload];
            console.log({newComments});
            return {...state, comments: newComments};

        default:
            return state;
    }
};