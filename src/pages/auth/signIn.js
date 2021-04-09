import React from 'react';
import logoImg from '../../img/logo/logo.png';
import './signIn.scoped.scss'

const signIn = ()=> {
  return(
    <div>
       <div className="container">
         <div className="container-wrap">
          <div className="big-logo">
            <img src={logoImg}/>
          </div>
          <div className="role-title"><h2>Sign In</h2></div>
          <div className="form-conatiner">
            <form href="javascript:void(0)">
              <input type="text" placeholder="Email" className="email"/>
              <input type="password" placeholder="Password" className="password"/>
              <button type="submit">sign In</button>
            </form>
          <div className="shift-links">
            <a href="/signUp">Sign Up</a>
          </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default signIn;