import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss';

function Blog(props) {
    return (
        <div className="blog-posts">
            <div className="blog-name">
                <img src={props.blogImg} className="blog-images"/>
                <Link to={props.blogLink} className="blog-link">{props.titleOfBlog}</Link>
            </div>
            <p className="published">{props.published}</p>
            <p className="blog-info-text">{props.blogInfo}</p>
            <Link to={props.readLink} className="read-more">Read</Link>
        </div>
    )
}

export default Blog
