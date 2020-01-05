import {
    RECEIVE_ALL_FILMS
} from './FilmsConstants'
import ApplicationConf from '../conf/ApplicationConf'
import AppStore from '../store/AppStore.js'


const FilmsAction = {

    receiveFilms(films) {
        return { type: RECEIVE_ALL_FILMS, films }
    },

    fetchFilms(callback = () => {}) {
        fetch(ApplicationConf.film.getAll())
        .then((result) => {
          return result.json();
            })
            .then ((response) => {
                AppStore.dispatch(FilmsAction.receiveFilms(response.films))
                callback()
            })
    },
}

export default FilmsAction
