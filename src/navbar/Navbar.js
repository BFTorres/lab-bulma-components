import React from 'react'
import CoolButton from '../coolButton/CoolButton'
import './Navbar.css'





const Navbar = () =>{
return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Home
        </a> 
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">   
          <CoolButton isInfo isRounded>login</CoolButton>

         <CoolButton isSuccess >SignUp</CoolButton>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

}

export default Navbar