import React, { Component } from "react";
import '../../css/Login.css';
import { Button } from 'react-bootstrap'

class Login extends Component {

    handleSubmit = event => {
      event.preventDefault();
      fetch('127.0.0.1:5000/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "user": this.lastName.value,
          "password": this.firstName.value,
        })
      });
    }
    
  render() {
    return (
    <form className="simple-login-container">
      <h2 className="display-2">Connexion</h2>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" ref={(ref) => {this.lastName = ref}} name="user" placeholder="Login"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="password" className="form-control"  ref={(ref) => {this.lastName = ref}} name="last-password" placeholder="Mot de passe"/>
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
    </form>
    );
  };
}

export default Login;
