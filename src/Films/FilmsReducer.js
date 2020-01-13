import {
    RECEIVE_ALL_FILMS,
} from './FilmsConstants'
import FilmsDto from './FilmsDto'

export const store = {
    films: [],
}

export function FilmsReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_FILMS:
            console.log(action)
            return {
                ...state,
                films: action.films.map( film => new FilmsDto(film))
            }
        default:
            return state
    }
}
