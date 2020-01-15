import {
    RECEIVE_ALL_ACTEURS
} from './ActeursConstants'
import ApplicationConf from '../conf/ApplicationConf'
import AppStore from '../store/AppStore.js'
import MailAction from '../Mailing/MailAction'


const ActeursAction = {

    receiveActeurs(acteurs) {
        return { type: RECEIVE_ALL_ACTEURS, acteurs }
    },

    fetchActeurs(callback = () => { }) {
        fetch(ApplicationConf.acteur.getAll())
            .then((result) => {
                return result.json();
            })
            .then((response) => {
                AppStore.dispatch(ActeursAction.receiveActeurs(response.acteurs))
                callback()
            }).catch(err =>
                MailAction.sendMail("sur les Acteurs", err.message)
            )
    },
}

export default ActeursAction
