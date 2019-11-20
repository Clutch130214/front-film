import React from "react";
import '../../css/Register.css';
import { Button } from 'react-bootstrap'

const Register = () => {
  return (
  <div class="simple-login-container">
    <h2 className="display-2">Création de compte</h2>
    <div class="row">
      <div class="col-md-12 form-group">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Nom"/>
          <input type="text" class="form-control" placeholder="Prénom"/>
        </div>
      </div>
    </div>
    <div class="row">
    </div>
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
      <div class="col-md-12 form-group">
        <input type="number" class="form-control" placeholder="Age"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <div class="btn-group">
          <Button href="/dashboard" className="btn-secondary">Retour</Button>
          <Button type="submit" className="btn-primary">Créer un compte</Button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <Button href="/login" variant="btn-sm">Se connecter ?</Button>
      </div>
    </div>
  </div>
  );
};

export default Register;
