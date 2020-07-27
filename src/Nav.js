import React, {useState, useEffect} from 'react';
import './Nav.css';


function Nav() {
  
  const [show, handleShow] = useState(false);

  //to get black background for nav only during scroll
  useEffect(() => {
    window.addEventListener( "scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    
    });
      return () => {window.removeEventListener("scroll")};  

  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
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