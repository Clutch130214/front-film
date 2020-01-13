import React, { Component } from "react";
import '../../css/Register.css';
import { Button } from 'react-bootstrap'
import RegisterService from '../../components/RegisterService';

class Register extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Register = new RegisterService();
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
  }

  handleFormSubmit(e) {
    e.preventDefault();
  
    this.Register.register(this.state.lastName,
                    this.state.firstName,
                    this.state.login,
                    this.state.password,
                    this.state.age)
}

  render() {
    return (
      <form className="simple-login-container" onSubmit={this.handleFormSubmit}>
        <h2 className="display-2">Création de compte</h2>
        <div className="row">
          <div className="col-md-12 form-group">
            <div className="input-group">
              <input type="text" className="form-control" onChange={this.handleChange} name="lastName" placeholder="Nom" />
              <input type="text" className="form-control" onChange={this.handleChange} name="firstName" placeholder="Prénom" />
            </div>
          </div>
        </div>
        <div className="row">
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" onChange={this.handleChange} name="login" placeholder="Login" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="password" className="form-control" onChange={this.handleChange} name="password" placeholder="Mot de passe" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="number" className="form-control" onChange={this.handleChange} name="age" placeholder="Age" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btn-group">
              <Button href="/" className="btn-secondary">Retour</Button>
              <Button type="submit" value="SUBMIT" className="btn-primary">Créer un compte</Button>
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
