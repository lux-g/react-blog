import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: ${({ theme })=> theme.backgroundColor};
        transition: all 600ms ease-in-out;
    }
    a {
        outline: none;
    }
`;

export const lightTheme = {
    mainTxtColor: "#333",
    txtGray: "#8C8C8C",
    txtHeader: "#333",
    textPub: "#333",
    textP: "#333",
    textRead: "#5D93FF",
    txtBlue: "#5D93FF",
    backgroundColor: "white",
    iconColor: "black",
    
}

export const darkTheme = {
    mainTxtColor: "#B5B5B5",
    txtGray: "#E4E4E4",
    txtBlue: "#F1CE6C",
    txtHeader: "#F1CE6C",
    textPub: "#B5B5B5",
    textP: "#E4E4E4",
    textRead: "#B5B5B5",
    backgroundColor: "#18191A",
    iconColor: "#F1CE6C",
}

