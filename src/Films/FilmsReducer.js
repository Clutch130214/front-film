import {
    RECEIVE_ALL_FILMS,
    RECEIVE_FILM
} from './FilmsConstants'
import FilmsDto from './FilmsDto'

export const store = {
    films: [],
    film: {}
}

export function FilmsReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_FILMS:
            console.log(action)
            return {
                ...state,
                films: action.films.map( film => new FilmsDto(film))
            }
        case RECEIVE_FILM:
            console.log(action)
            return {
                ...state,
                film: new FilmsDto(action.film)
            }
        default:
            return state
    }
}
