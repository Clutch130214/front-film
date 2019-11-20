import React from "react";
import '../../css/Register.css';
import { Button } from 'react-bootstrap'

const Register = () => {
  return (
    <div class="simple-login-container">
      <h2 className="display-2">Création de compte</h2>
      <div class="row">
        <div class="col-md-12 form-group">
          <input type="text" class="form-control" placeholder="Nom"/>
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
          <Button href="/" className="btn-secondary">Retour</Button>
          <Button type="submit" className="btn-primary">Créer un compte</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
