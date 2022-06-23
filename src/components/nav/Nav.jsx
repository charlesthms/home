import React, { useState } from 'react';
import './nav.css';
import { RiHome3Line } from 'react-icons/ri';
import { BsTerminal } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { BiMessageSquareDetail } from 'react-icons/bi';
import DarkMode from '../darkmode/DarkMode';


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={ () => setActiveNav('#') } className={ activeNav === '#' ? 'active' : '' }><RiHome3Line /></a>
      <a href="#terminal" onClick={ () => setActiveNav('#terminal') } className={ activeNav === '#terminal' ? 'active' : '' }><BsTerminal /></a>
      <a href="#work" onClick={ () => setActiveNav('#work') } className={ activeNav === '#work' ? 'active' : '' }><BiMessageSquareDetail /></a>
      <a href="#contact"><BiUser /></a>
      <DarkMode />
    </nav>
  )
}

export default Nav