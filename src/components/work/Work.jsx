import React from 'react';
import './work.css';
import INVOICER from '../../assets/invoicer.png';
import GOL from '../../assets/gameoflife.png';
import VISUALIZER from '../../assets/visualizer.png';

import { FiGithub } from 'react-icons/fi'

const Work = () => {
  return (
    <section id='work'>
      <div className="container">
        <div
          className="work__heading"
          data-aos="fade-right"
        >
          <h1 className='section-title'><span className='accent'>~</span>/work</h1>
          <h3>Quelques projets que j'ai réalisés.</h3>
        </div>

        <ul>

          <li className='work__detail right'>
            <div
              className='project-content'
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <p className='accent type'>Application web</p>
              <h3 className='project-title'>Invoicer</h3>
              <div className="project-desc">
                <p>Une application web permettant d'avoir une interface de gestion de clients, génération automatique de factures et statistiques</p>
              </div>
              <ul className='techs'>
                <li>VS Code</li>
                <li>Laravel</li>
                <li>PHP</li>
                <li>SASS</li>
              </ul>
              <div className='links'>
                <a href=""><FiGithub/></a>
              </div>
            </div>
            <div
              className='project-img'
              data-aos="fade-right"
              data-aos-delay="110"
            >
              <a href="" target="_blank" className='img-wrapper'>
                <img className="img" src={INVOICER}/>
              </a>
            </div>
          </li>

          <li className='work__detail left'>
            <div
              className='project-content'
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p className='accent type'>Application exécutable</p>
              <h3 className='project-title'>Jeu de la vie</h3>
              <div className="project-desc">
                <p>Application Java avec interface graphique reproduisant le jeu de la vie.</p>
              </div>
              <ul className='techs'>
                <li>IntelliJ</li>
                <li>Java</li>
              </ul>
              <div className='links'>
                <a href="https://github.com/charlesthms/GameOfLife" target="_blank"><FiGithub/></a>
              </div>
            </div>
            <div
              className='project-img'
              data-aos="fade-left"
              data-aos-delay="110"
            >
              <a href="https://github.com/charlesthms/GameOfLife" target="_blank" className='img-wrapper'>
                <img className="img" src={GOL}/>
              </a>
            </div>
          </li>

          <li className='work__detail right'>
            <div
              className='project-content'
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <p className='accent type'>Application web</p>
              <h3 className='project-title'>Visualisation d'algorithmes</h3>
              <div className="project-desc">
                <p>Application web implémentant différents algorithmes de recherches de chemin (pathfinding) ainsi que de génération de labyrinthes.</p>
              </div>
              <ul className='techs'>
                <li>VS Code</li>
                <li>Javascript</li>
                <li>SASS</li>
              </ul>
              <div className='links'>
                <a href="https://github.com/charlesthms/PathfindingVisualizer" target="_blank"><FiGithub /></a>
                <a href="" className='ext-link'>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
            </div>
            <div
              className='project-img'
              data-aos="fade-right"
              data-aos-delay="110"
            >
              <a href="https://github.com/charlesthms/PathfindingVisualizer" target="_blank" className='img-wrapper'>
                <img className="img" src={VISUALIZER}/>
              </a>
            </div>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Work