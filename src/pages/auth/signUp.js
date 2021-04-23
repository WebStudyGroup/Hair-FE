import React from 'react';
import logoImg from '../../img/logo/logo.png';
import './signUp.scoped.scss'

const signUp = ()=> {
  return(
    <div>
       <div className="container">
         <div className="container-wrap">
          <div className="big-logo">
            <img src={logoImg}/>
          </div>
          <div className="role-title"><h2>Sign Up</h2></div>
          <div className="form-conatiner">
            <form href="javascript:void(0)">
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <input type="text" placeholder="Firstname" />
              <input type="text" placeholder="Lastname"/>
        
              <button type="submit">Sign Up</button>
            </form>
          <div className="shift-links">
            <a href="/">Sign In</a>
          </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default signUp;