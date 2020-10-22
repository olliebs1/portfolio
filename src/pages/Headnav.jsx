import React from 'react'
import '../App.css';
import '../Navbar.css'
import { stack as Menu } from 'react-burger-menu';
import styles from '../Styles';
import { SocialIcon } from 'react-social-icons';


const Homepage = () => {

  return (
    <div>
    <header>
    <div className="icons">
      <a href='https://www.linkedin.com/in/olivier-benson-smith/' target="_blank" rel="noopener noreferrer" ><SocialIcon network="linkedin" bgColor='#ffff00'/></a>
      <a href='https://github.com/olliebs1' target="_blank" rel="noopener noreferrer"><SocialIcon network="github" bgColor='#ffff00'/></a>
      <a href='/contact'><SocialIcon network="email" bgColor='#ffff00'/></a>
    </div>
  <img src="https://codetheweb.blog/assets/img/icon2.png" className='imgLogo' alt=''/>
  </header>
  <div>
    <Menu styles={ styles }>
      <a id="home" className="menuItem" href="/"><span aria-hidden="true" ></span>Home</a>
      <a id="about" className="menuItem" href="/about"><span aria-hidden="true" ></span>About</a>
      <a id="portfolio" className="menuItem" href='/portfolio'><span aria-hidden="true"></span>Portfolio</a>
      <a id="contact" className="menuItem" href="/contact"> <span aria-hidden="true"></span>Contact</a>
    </Menu>
    </div>
    </div>
  )



}

export default Homepage