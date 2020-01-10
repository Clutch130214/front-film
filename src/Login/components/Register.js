import React, { Component } from "react";
import '../../css/Register.css';
import { Button } from 'react-bootstrap'

class Register extends Component {

  render() {
    return (
      <form className="simple-login-container" onSubmit={this.handleSubmit}>
        <h2 className="display-2">Création de compte</h2>
        <div className="row">
          <div className="col-md-12 form-group">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Nom" />
              <input type="text" className="form-control" placeholder="Prénom" />
            </div>
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" placeholder="Login" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="password" className="form-control" placeholder="Mot de passe" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="number" className="form-control" placeholder="Age" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btn-group">
              <Button href="/" className="btn-secondary">Retour</Button>
              <Button type="submit" className="btn-primary">Créer un compte</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Button href="/login" variant="btn-sm">Se connecter ?</Button>
          </div>
        </div>
      </form>
    );
  };
}

export default Register;
