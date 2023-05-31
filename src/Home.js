import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css'


function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid bg-light" >
    <a class="navbar-brand" href="#">Acceuil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav"id='flex'>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Connexion</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Inscription</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<div class="container-fluid mt-5">
  <div class="row">
    <div class="col-sm-4 ">
     
    </div>
    <div class="col-sm-4 mb-5 " id='flexo'>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    
  </div>
  <button type="submit mb-5" class="btn btn-primary">Submit</button>
</form>
    </div>
    <div class="col-sm-4 ">
     
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
