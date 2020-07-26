import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
  //to get black background for nav only during scroll
  useEffect(() => {
    

  }, []);

  return (
    <div className="nav">
      <img className="nav__logo" 
       src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20190203185210%21Netflix_2015_logo.svg"
       alt="Netflix logo" />

       <img className="nav__avatar" 
       src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
       alt="Netflix logo" />
    
    </div>
  );
}

export default Nav;