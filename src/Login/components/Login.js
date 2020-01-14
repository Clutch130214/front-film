import React, { Component } from "react";
import { Button } from 'react-bootstrap';
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
      <div className="alert alert-danger text-center" role="alert">
        Accès non autorisé !
      </div>
    )
  }

  Wait(){
    return (
      <div style={{ textAlign: 'center' }}>
          <div>
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Loading...</span>
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
        })
}

componentWillMount(){
  if(this.Auth.loggedIn())
      this.props.history.replace('/');
}

  render() {
    return (
    <form className="simple-login-container" onSubmit={this.handleFormSubmit}>
      <h2 className="display-2 text-light">Connexion</h2>
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
        {this.state.show && this.Alert()}
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="btn-group">
              <Button href="/register" className="btn-secondary">Créer un compte</Button>
              <Button type="submit" value="SUBMIT" className="btn-primary">Se connecter</Button>
            </div>
          </div>
        </div>
    </form>
    );
  };
}

export default Login;
