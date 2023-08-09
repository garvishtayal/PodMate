import './header.css';
import { useState } from 'react';
import loginImage from '/header-login.png'
import hanburgerImage from '/ham.png'
import logoImage from '/header-logo.png'

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header-container'>
      <div className='header-toogle-button'>
      <button className='header-hanburger'
        onClick={toggleNavbar}
        >
        <img className='header-hanburger-img' src={hanburgerImage}></img>
      </button>
      </div>
      <div className={`header-left ${isOpen ? 'header-left-open' : ''}`}>
        <img className='logo-img' src= {logoImage}></img>
        <div className='header-name'>PodMate</div>
      </div>
      <div className={`header-middle ${isOpen ? 'header-middle-open' : ''}`}>
        <div className='header-middle-element'>FEATURES</div>
        <div className='header-middle-element'>EPISODES</div>
        <div className='header-middle-element'>PRICING</div>
        <div className='header-middle-element'>ABOUT US</div>
      </div>
      <div className={`header-right ${isOpen ? 'header-login-open' : ''}`}>
        <button className='header-login-button'>
          <img className='header-login-button-image' src={loginImage}></img>
        </button>
        <div className='header-login'>LOGIN</div>
        <button className='header-contact'>CONTACT US</button>
      </div>
    </div>
  )
}

export default Header;
