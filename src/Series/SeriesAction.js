'use strict'
import {
    RECEIVE_ALL_SERIES
} from './SeriesConstants'
import ApplicationConf from '../conf/ApplicationConf'
import * as APIConfig from '../conf/APIConfig'


const SeriesAction = {
    
    receiveSeries(series) {
        return { type: RECEIVE_ALL_SERIES, series }
    },

    promiseSeries() {
        return fetch(ApplicationConf.series.getAll(),
        {
            method: 'GET',
            headers: APIConfig.HEADERS,
        },
        )
    },

    // fetchSeries() {
    //     return dispatch => {
    //         return fetch(
    //             ApplicationConf.series.getAll(),
    //             {
    //                 method: 'GET',
    //                 headers: APIConfig.HEADERS,
    //             },
    //         ).then((response) => {
    //                 if (!response.ok) {
    //                     throw new Error('Error - 404 Not Found')
    //                 }
    //                 return response.json().then(function(json) {
    //                     dispatch(SeriesAction.receiveSeries(json.series))
    //             })
    //         })
    //     }
    // }

    fetchSeries() {
        return fetch(
            ApplicationConf.series.getAll(),
            {
                method: 'GET',
                headers: APIConfig.HEADERS,
            },
        ).then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                return response.json().then(function(json) {
                    const series = json.series
                    console.log(series)
                    return series
            })
        })  
    }
}

export default SeriesAction
