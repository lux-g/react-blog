import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDev, faLinkedin, faTwitter, faInstagramSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";
import MyLogo from '../images/circle-cropped(2).png';


const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid lightgray;
    padding: 15px;
    padding-right: 50px;
    margin-top: 40px;
    .my-logo {
        width: 75px;
        margin-bottom: 25px;
    }
    h3 {
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 25px;
        color: ${({ theme })=> theme.txtHeader};
        transition: color 600ms ease-in-out;
    }
    p {
        font-weight: 600;
        line-height: 1.625;
        color: ${({ theme })=> theme.txtGray};
        margin-bottom: 40px; 
        transition: color 600ms ease-in-out;
    }
    a {
        display: flex;
        margin-bottom: 20px;
        text-decoration: underline;
        color: ${({ theme })=> theme.mainTxtColor};
        transition: color 600ms ease-in-out;
        &:hover {
            color: ${({ theme })=> theme.txtBlue};
        }
    }
    @media (max-width: 900px) {
        border: none;
}
`;
const Socials = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(3, 40px);
    a {
        margin-bottom: 10px;
        margin: 5px;
        text-decoration: none;
        color: ${({ theme })=> theme.mainTxtColor};
        transition: color 600ms ease-in-out;
        &:hover {
            color: ${({ theme })=> theme.txtBlue};
        }
    }
`;

function Nav() {
    return (
        <LeftSide>
            <img className="my-logo" src={MyLogo} alt="logo"/>
            <h3>Marc Trojanowski</h3>
            <p>Web Developer - <br/> HTML, CSS, Javascript, React</p>
            <a href="https://github.com/lux-g">About Me</a>
            <a href="mailto:marc.trojanowski@gmail.com">Contact Me</a>
  
        <Socials>
            <a href="https://github.com/lux-g" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab"  icon={faGithub} size="2x" /></a>
            <a href="https://dev.to/devcoder" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab"  icon={faDev} size="2x" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faLinkedin} size="2x"/></a>
            <a href="https://twitter.com/DevCoder2" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faTwitter} size="2x"/></a>
            <a href="https://www.instagram.com/devcoder2/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faInstagramSquare} size="2x"/></a>
            <a href="https://codepen.io/Nnx0" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon className="fab" icon={faCodepen} size="2x"/></a>
        </Socials>
      </LeftSide>
    )
}

export default Nav
