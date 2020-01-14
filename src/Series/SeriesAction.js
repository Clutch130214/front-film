import {
    RECEIVE_ALL_SERIES,
    RECEIVE_SERIE
} from './SeriesConstants'
import ApplicationConf from '../conf/ApplicationConf'
import AppStore from '../store/AppStore.js'


const SeriesAction = {

    receiveSeries(series) {
        return { type: RECEIVE_ALL_SERIES, series }
    },

    fetchSeries(callback = () => {}) {
        fetch(ApplicationConf.serie.getAll())
        .then((result) => {
          return result.json();
            })
            .then ((response) => {
                AppStore.dispatch(SeriesAction.receiveSeries(response.series))
                callback()
            })
    },

    receiveSerie(serie) {
        return { type: RECEIVE_SERIE, serie }
    },

    fetchSerie(id, callback = () => {}) {
        fetch(ApplicationConf.serie.getById(id))
        .then((result) => {
          return result.json();
            })
            .then ((response) => {
                AppStore.dispatch(SeriesAction.receiveSerie(response))
                callback()
            })
    },
}

export default SeriesAction
