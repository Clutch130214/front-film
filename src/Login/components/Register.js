import React, { Component } from "react";
import '../../css/Register.css';
import { Button } from 'react-bootstrap'
import RegisterService from '../../components/RegisterService';
import { Alert } from "react-bootstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      alertMode : 'missing',
      lastName: '',
      firstName: '',
      login: '',
      password: '',
      age: null,
    };
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

  handleDismiss = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  Success(){
    return (
      <Alert variant="success" onClose={this.handleDismiss} dismissible>
        <Alert.Heading>Compte crée avec succès !</Alert.Heading>
      </Alert>
    )
  }

  Error(){
    return (
      <Alert variant="danger" onClose={this.handleDismiss} dismissible>
        <Alert.Heading>Erreur lors de la création du compte</Alert.Heading>
      </Alert>
    )
  }

  Missing(){
    return (
      <Alert variant="warning" onClose={this.handleDismiss} dismissible>
        <Alert.Heading>Tous les champs doivent êtres remplies</Alert.Heading>
      </Alert>
    )
  }

  Wait(){
    return (
      <div style={{ textAlign: 'center'}}>
          <div>
            <div class="spinner-border m-5" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
    )
  }

  Alert() {
    switch(this.state.alertMode){
      case 'success': return this.Success()
      case 'error': return this.Error()
      case 'missing': return this.Missing()
      case 'wait': return this.Wait()
      default : return this.Wait()
    }
  }

  handleFormSubmit = (e) => {
    if(this.state.firstName && this.state.lastName && this.state.login && this.state.password && this.state.age) {
    this.setState({ show: true, alertMode: 'wait' })
    e.preventDefault();
    this.Register.register(this.state.lastName,
                          this.state.firstName,
                          this.state.login,
                          this.state.password,
                          this.state.age).then( res => {
                                            if(!res){
                                              this.setState({ show: true, alertMode: 'success' })
                                            } else {
                                              this.setState({ show: true, alertMode: 'error' })
                                            }
                                          }
                                      )

    }
    else {
    this.setState({ show: true, alertMode: 'missing' }) }
}

  render() {
    return (
      <div className="simple-login-container" onSubmit={this.handleFormSubmit}>
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
            <input type="number" className="form-control" onChange={this.handleChange} name="age" placeholder="Age"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btn-group">
              <Button href="/" className="btn-secondary">Retour</Button>
              <Button onClick={this.handleFormSubmit} type="submit" value="SUBMIT" className="btn-primary">Créer un compte</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Button href="/login" variant="btn-sm">Se connecter ?</Button>
            {this.state.show ? this.Alert() : ''}
          </div>
        </div>
      </div>
    );
  };
}

export default Register;
