import {
    RECEIVE_ALL_ACTEURS
} from './ActeursConstants'
import ApplicationConf from '../conf/ApplicationConf'
import * as APIConfig from '../conf/APIConfig'
import AppStore from '../store/AppStore.js'


const ActeursAction = {

    receiveActeurs(acteurs) {
        return { type: RECEIVE_ALL_ACTEURS, acteurs }
    },

    promiseActeurs() {
        return fetch(
            ApplicationConf.acteur.getAll(),
            {
                method: 'GET',
                headers: APIConfig.HEADERS,
            },
        )
    },

    fetchActeurs(callback = () => {}) {
        fetch(ApplicationConf.acteur.getAll())
        .then((result) => {
          return result.json();
            })
            .then ((response) => {
                AppStore.dispatch(ActeursAction.receiveActeurs(response.acteurs))
                callback()
            })
    },
}

export default ActeursAction
