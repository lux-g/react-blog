import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

const Icons = styled(FontAwesomeIcon)`
    color: ${({ theme })=> theme.iconColor};
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
`;

const Toggle = ({theme, toggleTheme}) => {
    return (
        <div onClick={toggleTheme}>
            <Icons icon={theme === "light" ? faMoon : faSun} size="lg"/>
        </div>
    )
}

export default Toggle
