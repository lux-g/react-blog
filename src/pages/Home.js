import React from 'react';
import Nav from '../components/Nav';
import Blog from '../components/Blog';
import DarkModeToggle from '../components/DarkModeToggle';

//IMAGES
import MoonImg from '../images/moon.png';
import IntersectionImg from '../images/intersection.png';
import FindImg from '../images/find.png';



function Home() {
    return (
        <div className="index-container">
            <DarkModeToggle/>
            <Nav/>
            <div className="main-blogs">
                <Blog
                    blogImg={MoonImg}
                    blogLink="/Nightmode"
                    titleOfBlog="Night Mode Toggle"
                    published="Published: July 2, 2020"
                    blogInfo="Using vanilla javascript I will explain how to setup a night mode toggle button and also save it to the local storage for any site..."
                    readLink={"/Nightmode"}
                />
                <Blog
                    blogImg={IntersectionImg}
                    blogLink="/IntersectionObserver"
                    titleOfBlog="Intersection Observer Animations"
                    published="Published: July 6, 2020"
                    blogInfo="Using Javscript I will explain how to use the intersection observer API to create animations when content comes into view..."
                    readLink="/IntersectionObserver"
                />
                <Blog
                    blogImg={FindImg}
                    blogLink="/MapFindFilter"
                    titleOfBlog="Javascript Map, Find, and Filter"
                    published="Published: Aug 12, 2020"
                    blogInfo="How to perform common operations in Javascript using Map, Find,and Filter on array's..."
                    readLink="/MapFindFilter"
                />
            </div>
        </div>
    )
}

export default Home
