import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";


const BlogPosts = styled.div`
    max-width: 800px;
    padding: 15px;
    margin-bottom: 20px;
    margin-top: 40px;
`;
const BlogImages = styled.img`
    width: 30px;
    margin-right: 10px;
`;
const BlogName = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
const BlogLink = styled(Link)`
    text-decoration: none;
    text-align: left;
    font-size: 25px;
    color: ${({ theme })=> theme.txtHeader};
    font-weight: 700;
    transition: color 600ms ease-in-out;
    &:hover {
        color: ${({ theme })=> theme.txtBlue};
    }
    @media (max-width: 900px) {
        font-size: 20px;
}
`;
const Published = styled.p`
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme })=> theme.textP};
    transition: color 600ms ease-in-out;
`;
const BlogInfoText = styled.p`
    line-height: 1.5;
    margin-bottom: 20px;
    color: ${({ theme })=> theme.textPub};
    transition: color 600ms ease-in-out;
`;
const ReadMore = styled(Link)`
    color: ${({ theme })=> theme.textRead};
    transition: color 600ms ease-in-out;
    max-width: 8%;
    cursor: pointer;
    &:hover {
        text-decoration: none;
        color: ${({ theme })=> theme.mainTxtColor};
        transition: color 600ms ease-in-out;
    }
`;

function Blog(props) {
    return (
        <BlogPosts>
            <BlogName>
                <BlogImages src={props.blogImg} />
                <BlogLink to={props.blogLink}>{props.titleOfBlog}</BlogLink>
            </BlogName>
            <Published>{props.published}</Published>
            <BlogInfoText>{props.blogInfo}</BlogInfoText>
            <ReadMore to={props.readLink}>Read</ReadMore>
        </BlogPosts>
    )
}

export default Blog
