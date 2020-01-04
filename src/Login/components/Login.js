import React, { Component } from "react";
import '../../css/Login.css';
import { Button } from 'react-bootstrap'

class Login extends Component {
  constructor(props) {
        super(props)
        this.state = {
            user: {},
        }
        this.onChangeUser = this.onChangeUser.bind(this)
    }

    onChangeUser(key, value) {
        const obj = Object.assign({}, this.state.user)
        obj[key] = value
        this.setState({ user: obj })
    }
  render() {
    return (
    <div class="simple-login-container">
      <h2 className="display-2">Connexion</h2>
        <div class="row">
          <div class="col-md-12 form-group">
            <input type="text" class="form-control" onChange={ (e) => this.onChangeUser('user', (e.target.value)) } placeholder="Login"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 form-group">
            <input type="password" class="form-control"  onChange={ (e) => this.onChangeUser('password', (e.target.value)) } placeholder="Mot de passe"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="btn-group">
              <Button href="/dashboard" className="btn-secondary">Retour</Button>
              <Button type="submit" className="btn-primary">Se connecter</Button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <Button href="/" variant="btn-sm">Créer un compte ?</Button>
          </div>
        </div>
    </div>
    );
  };
}

export default Login;
