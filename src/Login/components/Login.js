import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import AuthService from '../../components/AuthService';
import '../../css/Login.css';


class Login extends Component {
  constructor() {
    super();
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

  handleFormSubmit(e) {
    e.preventDefault();
  
    this.Auth.login(this.state.user,this.state.password)
        .then(res => {
           this.props.history.replace('/');
        })
        .catch(err => {
            alert(err);
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
