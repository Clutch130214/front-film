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
    <div className="simple-login-container">
      <h2 className="display-2">Connexion</h2>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" onChange={ (e) => this.onChangeUser('user', (e.target.value)) } placeholder="Login"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="password" className="form-control"  onChange={ (e) => this.onChangeUser('password', (e.target.value)) } placeholder="Mot de passe"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btn-group">
              <Button href="/" className="btn-secondary">Retour</Button>
              <Button type="submit" className="btn-primary">Se connecter</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Button href="/register" variant="btn-sm">Créer un compte ?</Button>
          </div>
        </div>
    </div>
    );
  };
}

export default Login;
