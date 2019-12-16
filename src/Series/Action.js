'use strict'
import {
    RECEIVE_ALL_SERIES
} from './SeriesConstants'
import ApplicationConf from '../conf/ApplicationConf'
import * as APIConfig from '../conf/APIConfig'
import { resolve } from 'dns'


const Action = {
    
    // receiveSeries(series) {
    //     return { type: RECEIVE_ALL_SERIES, series }
    // },

    // promiseSeries() {
    //     return fetch(ApplicationConf.series.getAll(),
    //     {
    //         method: 'GET',
    //         headers: APIConfig.HEADERS,
    //     },
    //     )
    // },

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
            ApplicationConf.serie.getAll(),
            {
                method: 'GET',
                headers: APIConfig.HEADERS,
            },
        ).then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                return response.json().then(function(json) {
                    return json.series
                  })
        })  
    },

    fetchFilms() {
        return fetch(
            ApplicationConf.film.getAll(),
            {
                method: 'GET',
                headers: APIConfig.HEADERS,
            },
        ).then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                return response.json().then(function(json) {
                    return json.films
                  })
        })  
    },

    fetchActeurs() {
        return fetch(
            ApplicationConf.acteur.getAll(),
            {
                method: 'GET',
                headers: APIConfig.HEADERS,
            },
        ).then((response) => {
                if (!response.ok) {
                    throw new Error('Error - 404 Not Found')
                }
                return response.json().then(function(json) {
                    return json.acteurs
                  })
        })  
    }
}

export default Action
