import {CREATE_BOARD} from './types'

export function createBoard(board) {
    return {
        type: CREATE_BOARD,
        payload: board,
    }
}
