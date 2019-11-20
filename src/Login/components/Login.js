import React from "react";
import '../../css/Login.css';
import { Button } from 'react-bootstrap'

const Login = () => {
  return (
  <div class="simple-login-container">
    <h2 className="display-2">Connexion</h2>
    <div class="row">
      <div class="col-md-12 form-group">
        <input type="text" class="form-control" placeholder="Login"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 form-group">
        <input type="password" class="form-control" placeholder="Mot de passe"/>
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

export default Login;
