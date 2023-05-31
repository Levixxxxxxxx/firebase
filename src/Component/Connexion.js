import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Connexion() {
  return (
    <div className="Connexion">
      <div className="container">
  <div className="row align-items-start">
    <div className="col">
    
    </div>
    <div className="col">
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    
  </div>
  <button type="submit" className="btn btn-primary"> 
  submit  </button>
</form>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>
      
     
    </div>
  );
}

export default Connexion;