import {
    RECEIVE_ALL_SERIES,
    RECEIVE_SERIE
} from './SeriesConstants'
import SeriesDto from './SeriesDto'

export const store = {
    series: [],
    serie: {}
}

export function SeriesReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_SERIES:
            console.log(action)
            return {
                ...state,
                series: action.series.map( serie => new SeriesDto(serie))
            }
        case RECEIVE_SERIE:
            console.log(action)
            return {
                ...state,
                serie: new SeriesDto(action.serie)
            }
        default:
            return state
    }
}
