import Connexion from './Component/Connexion'
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link" href="/Component/Connexion">Inscription</a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/Component/Connexion">Connexion</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Connexion/>
    </div>

    
  );
}

export default App;