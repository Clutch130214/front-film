import {
    RECEIVE_ALL_FILMS,
    RECEIVE_FILM
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

    receiveFilm(film) {
        return { type: RECEIVE_FILM, film }
    },

    fetchFilm(id, callback = () => {}) {
        fetch(ApplicationConf.film.getById(id))
        .then((result) => {
          return result.json();
            })
            .then ((response) => {
                AppStore.dispatch(FilmsAction.receiveFilm(response))
                callback()
            })
    },
}

export default FilmsAction
