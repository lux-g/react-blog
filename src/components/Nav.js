import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev, faLinkedin, faTwitter, faInstagramSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';
import '../styles/styles.scss'
import MyLogo from '../images/circle-cropped(2).png';

function Nav() {
    return (
        <div className="left-side">
            <img className="my-logo" src={MyLogo} alt="logo"/>
            <h3>Marc Trojanowski</h3>
            <p>Web Developer - <br/> HTML, CSS, Javascript, React</p>
            <a href="https://github.com/lux-g">About Me</a>
            <a href="mailto:marc.trojanowski@gmail.com">Contact Me</a>
  
        <div className="socials">
            <a href="https://github.com/lux-g" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab"  icon={faGithub} size="2x" /></a>
            <a href="https://dev.to/devcoder" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab"  icon={faDev} size="2x" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faLinkedin} size="2x"/></a>
            <a href="https://twitter.com/DevCoder2" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faTwitter} size="2x"/></a>
            <a href="https://www.instagram.com/devcoder2/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faInstagramSquare} size="2x"/></a>
            <a href="https://codepen.io/Nnx0" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faCodepen} size="2x"/></a>
        </div>
      </div>
    )
}

export default Nav
