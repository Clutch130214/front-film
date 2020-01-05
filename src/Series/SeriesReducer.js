import {
    RECEIVE_ALL_SERIES,
} from './SeriesConstants'

export const store = {
    series: [],
}

export function SeriesReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_SERIES:
            console.log(action)
            return {
                ...state,
                series: action.series
            }
        default:
            return state
    }
}
