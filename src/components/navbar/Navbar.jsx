import './NavbarStyle.css'
import { RiMenu3Line } from "react-icons/ri";
import { useState, useEffect } from 'react';


function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };


  
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
        
  return (<>

    <header>
      <a href="/" className='logo'><img src="/logo.png" alt="" /></a>
    
  { (toggleMenu || screenWidth > 1000) && (
    <ul className='navmenu'>
      <li><a href="/" className='active'>Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">Roadmap</a></li>
      <li><a href="/">Team</a></li>
      <li><a href="/">Contact</a></li>
    </ul>)}

    <div className='menu-icon'><i><RiMenu3Line onClick={toggleNav} /></i></div>
</header>
  </>
    
  )
}

export default Navbar