import React, { Component } from "react";
import '../../css/Register.css';
import { Button } from 'react-bootstrap'

class Register extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('127.0.0.1:5000/users', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "last-name": this.lastName.value,
        "first-name": this.firstName.value,
        "login": this.login.value,
        "password": this.password.value,
        "age": this.age.value
      })
    });
  }

  render() {
    return (
      <div className="simple-login-container" onSubmit={this.handleSubmit}>
        <h2 className="display-2">Création de compte</h2>
        <div className="row">
          <div className="col-md-12 form-group">
            <div className="input-group">
              <input type="text" className="form-control" ref={(ref) => {this.lastName = ref}} name="last-name" placeholder="Nom" />
              <input type="text" className="form-control" ref={(ref) => {this.firstName = ref}} name="first-name" placeholder="Prénom" />
            </div>
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" ref={(ref) => {this.login = ref}} name="login" placeholder="Login" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="password" className="form-control" ref={(ref) => {this.password = ref}} name="password" placeholder="Mot de passe" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="number" className="form-control" ref={(ref) => {this.age = ref}} name="age" placeholder="Age" />
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
      </div>
    );
  };
}

export default Register;
