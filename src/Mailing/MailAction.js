import * as APIConfig from '../conf/APIConfig'

const MailAction = {

    sendMail(error, error_name){
        return this.fetch(`${APIConfig.API_MAIL}/mail`, {
            method: 'POST',
            body: JSON.stringify({ error, error_name })
        })
    },

    fetch(url, options) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }
}

export default MailAction