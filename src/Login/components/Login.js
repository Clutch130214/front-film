import React, { Component } from "react";
import { Button, Alert } from 'react-bootstrap';
import AuthService from '../../Auth/AuthService';
import '../../css/Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      user: '',
      password: '',
      alertMode : 'wait',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
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

  Error() {
    return (
      <Alert variant="danger" onClose={this.handleDismiss} dismissible>
        <Alert.Heading> Accès non autorisé ! </Alert.Heading>
      </Alert>
    )
  }

  Wait(){
    return (
      <div style={{ textAlign: 'center' }}>
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
      case 'error': return this.Error()
      case 'wait': return this.Wait()
      default : return this.Wait()
    }
  }


  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({ show: true, alertMode: 'wait'});
    this.Auth.login(this.state.user,this.state.password)
        .then(res => {
           this.props.history.replace('/');
        })
        .catch(err => {
            this.setState({ show: true, alertMode: 'error'});
            // alert(err);
        })
}

componentWillMount(){
  if(this.Auth.loggedIn())
      this.props.history.replace('/');
}

  render() {
    return (
    <form className="simple-login-container" onSubmit={this.handleFormSubmit}>
      <h2 className="display-2">Connexion</h2>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="text" className="form-control" onChange={this.handleChange} name="user" placeholder="Login"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 form-group">
            <input type="password" className="form-control" onChange={this.handleChange} name="password" placeholder="Mot de passe"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btn-group">
              <Button href="/" className="btn-secondary">Retour</Button>
              <Button type="submit" value="SUBMIT" className="btn-primary">Se connecter</Button>
            </div>
          </div>
        </div>
        <div className="row" style={{ placeContent: 'center' }}>
          <div className="col-md-12 text-center">
            <Button href="/register" variant="btn-sm">Créer un compte ?</Button>
          </div>
          {this.state.show && this.Alert()}
        </div>
    </form>
    );
  };
}

export default Login;
