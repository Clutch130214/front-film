import {
    RECEIVE_ALL_SERIES
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
}

export default SeriesAction
