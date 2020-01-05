import {
    RECEIVE_ALL_ACTEURS,
} from './ActeursConstants'

export const store = {
    acteurs: [],
}

export function ActeursReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_ACTEURS:
            console.log(action)
            return {
                ...state,
                acteurs: action.acteurs
            }
        default:
            return state
    }
}
