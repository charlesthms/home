import React from 'react'
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="" className='logo'>Charles Thomas</a>

      <ul className='permalinks'>
        <li><a href="#">~/home</a></li>
        <li><a href="#terminal">~/terminal</a></li>
        <li><a href="">~/work</a></li>
        <li><a href="#">~/about</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><BsGithub/></a>
        <a href="">< BsLinkedin /></a>
        <a href="">< HiOutlineMail /></a>
      </div>

      <div className="footer__copyright">
        <small>Designé & Créé par Charles Thomas</small>
      </div>
    </footer>
  )
}

export default Footer