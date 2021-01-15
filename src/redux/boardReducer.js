import {CREATE_BOARD, CREATE_LIST} from "./types";

const initialState = {
    boards: [],
}

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BOARD:
            return {...state, boards: state.boards.concat([action.payload])}
        case CREATE_LIST:
            return null
        default:
            return state
    }
}