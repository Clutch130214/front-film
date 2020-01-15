import * as APIConfig from '../conf/APIConfig'

export default class RegisterService {
    constructor(domain) {
        this.domain = domain || APIConfig.API_URI
        this.fetch = this.fetch.bind(this)
        this.register = this.register.bind(this)
    }

    register(lastName, firstName, login, password, age) {
        return this.fetch(`${ this.domain }/users`, {
            method: 'POST',
            body: JSON.stringify({
                lastName,
                firstName,
                login,
                password,
                age
            })
        })
    }

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