'use strict'

import {
    RECEIVE_ALL_SERIES,
} from './SeriesConstants'
import SeriesDto from './SeriesDto'

export const store = {
    series: [],
}

export function SeriesReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_SERIES:
            console.log(action.series)
            return {
                ...state,
                series: action.series.map(serie => new SeriesDto(serie))
            }
        default:
            return state
    }
}
