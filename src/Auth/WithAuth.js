import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService('http://127.0.0.1:6500/');
    return class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                user: null
            }
        }

        componentWillMount() {
            if (!Auth.loggedIn()) {
                this.props.history.replace('/login')
            }
            else {
                try {
                    const profile = Auth.getProfile()
                    localStorage.setItem('login', profile.login)
                    localStorage.setItem('id', profile.id)
                    this.setState({
                        user: profile
                    })
                }
                catch (err) {
                    Auth.logout()
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if (this.state.user) {
                return (
                    <AuthComponent history={ this.props.history } user={ this.state.user } />
                )
            }
            else {
                return null
            }
        }
    }
}