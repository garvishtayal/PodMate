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
    <div className="px-10 flex h-14 text-base border-b border-white-25">


      {/* Toggle Img (shows only on small_screen)*/}
      <div className="flex-1 md:hidden">
        <img onClick={toggleNavbar}
          className="h-5 hover:cursor-pointer"
          src={hanburgerImage}>
        </img>
      </div>

      {/* Left-Logo (switch to middle in small screen) */}
      <div className={`flex-1 md:flex-none flex items-center ${isOpen ? 'hidden' : ''}`}>
        <img
          className="h-10 bg-white p-1 rounded-full logo-img hover:shadow-md hover:cursor-pointer" src={logoImage}>
        </img>
        <div className='text-white'>PodMate</div>
      </div>

      {/* Middle */}
      <div className={`hidden md:flex flex-1 justify-evenly items-center text-white${isOpen ? 'hidden' : ''}`}>
        <div className="hover:text-white mr-4 hover:cursor-pointer">FEATURES</div>
        <div className="hover:text-white mr-4 hover:cursor-pointer">EPISODES</div>
        <div className="hover:text-white mr-4 hover:cursor-pointer">PRICING</div>
        <div className="hover:text-white mr-4 hover:cursor-pointer">ABOUT US</div>
      </div>

      {/* Right */}
      <div className={`flex items-center pl-10 text-white ${isOpen ? 'hidden' : ''}`}>
        <button className="md:hidden bg-white border rounded-full border-black-500">
          <img className='h-8' src={loginImage}></img>
        </button>
        <div className="hidden md:flex">LOGIN</div>
        <button className="hidden md:block p-2 ml-2 text-white border border-white-100">CONTACT US</button>
      </div>


    </div>
  )
}

export default Header;
