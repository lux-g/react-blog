import { css } from "styled-components";

const BlogContainer = css`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px;
    padding-bottom: 50px;
    line-height: 1.8em;
    font-size: 17px;
    color: ${({ theme })=> theme.textPub};
    h1 {
        color: ${({ theme })=> theme.txtHeader};
        transition: all 400ms ease-in-out;
        padding: 20px 0px;
        line-height: 1.5em;
        text-align: center;
        @media (max-width: 900px) {
            font-size: 25px;
        }
    }
    .blogpost-pub {
        color: ${({ theme })=> theme.textP};
    }
    img {
        max-width: 100%;
        border-radius: 4px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
    .line {
        margin-bottom: 15px;
    }
    .enjoy-post {
        color: ${({ theme })=> theme.textP};
    }
    .buy-coffee {
        box-shadow: none;
        width: 125px;
    }
    a {
        text-decoration: none;
    }
    /*----BUTTON----*/
    .circleArrow {
        margin-right: 5px;
    }
    .allblogsBtn {
        position: fixed;
        top: 0;
        left: 0;
        margin: 40px;
        font-size: 16px;
        padding: 8px;
        background-color: ${({ theme })=> theme.backgroundColor};;
        color: ${({ theme })=> theme.textP};
        border-radius: 25px;
        border: 2px solid lightgray;
        cursor: pointer;    
    }
    .allblogsTopBtn {
        font-size: 16px;
        padding: 8px;
        background-color: ${({ theme })=> theme.backgroundColor};;
        color: ${({ theme })=> theme.textP};
        border: 2px solid lightgray;
        border-radius: 25px;
        cursor: pointer;
        margin-bottom: 25px;
        text-align: center;
        display: none;
    }
    @media (max-width: 1125px) {
        .allblogsBtn {
            display: none;
        }
        .allblogsTopBtn {
            display: block;
        }   
    }
`;

export default BlogContainer;