import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Inscription() {
  return (
    <div className="Inscription">
      <h2>Inscription</h2>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input type="password" class="form-control" id="password" placeholder="Mot de passe" />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input type="password" class="form-control" id="confirmPassword" placeholder="Confirmer le mot de passe" />
        </div>
        <button type="submit" class="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  );
}

export default Inscription;