import React from 'react';
import './header.css';
import HeaderSocials from './HeaderSocials';
import PROFILE from '../../assets/profile.svg';

const Header = () => {

  return (
    <header className='header'>
      <div className="container header__container">
        <div className="description">
          <div className='text'>
            <h5 className='accent' data-aos="fade-right" data-aos-duration="700">Bonjour, je suis</h5><br />
            <h1 className='name' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Charles Thomas.</h1><br />
            <h1 className='caption' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Etudiant, Développeur & Passionné </h1><br />
            <h5 className='sub' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Etudiant en informatique, j'aime conçevoir des outils permettant de résoudre des <span className='accent'>problématiques</span> ou me permettant d'apprendre de nouvelles choses.</h5>
          </div>
        </div>

        <img
          className='profile'
          src={PROFILE}
          alt="Profile picture"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-delay="300"
        />

        <div 
          className="header__btns"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
            <a className='btn' href=''>Voir mon CV</a>
            <a className='btn btn-primary' href='#terminal'>Lancer le terminal</a>
        </div>
          
        <HeaderSocials />
        </div>
    </header>
  )
}

export default Header