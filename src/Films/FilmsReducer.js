'use strict'

import {
    RECEIVE_ALL_FILMS,
} from './FilmsConstants'

export const store = {
    films: [],
}

export function FilmsReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_FILMS:
            console.log(action)
            return {
                ...state,
                films: action.films
            }
        default:
            return state
    }
}
