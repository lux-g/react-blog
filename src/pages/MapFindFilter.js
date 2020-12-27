import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import BlogContainer from '../styles/BlogsStyles';
import styled from "styled-components";

//IMAGES
import mffImg1 from '../images/tvshowarray.png';
import mffImg2 from '../images/function map.png';
import mffImg3 from '../images/consolemap.png';
import mffImg4 from '../images/mff-find.png';
import mffImg5 from '../images/the office.png';
import mffImg6 from '../images/filter.png';
import mffImg7 from '../images/filter return.png';
import mffImg8 from '../images/movies.png';
import mffImg9 from '../images/good movies.png';
import mffImg10 from '../images/returned movies.png';
import mffImg11 from '../images/bad movies.png';
import mffImg12 from '../images/recap.png';

const MapFindFilterBLog = styled.div`
    ${BlogContainer}
`;

function MapFindFilter() {
    return (
        <MapFindFilterBLog>
            <div className="mapfindfilter">
            <Link to="/"><button className="allblogsTopBtn"><FontAwesomeIcon className="circleArrow" icon={faArrowAltCircleLeft}/>All Posts</button></Link>
            <h1>Javascript map(), find(), and filter()</h1>
            <p className="blogpost-pub">PUBLISHED: JULY 12, 2020</p>
            <hr class="line"/>
            <h2>Map()</h2>
            <p>Map is a method that creates a new array and returns something to every item in the array by calling a function. There would be no need to map over something and not return a value. A forEach() loop can only iterate and not return anything. Lets take a look at an example. I have created an array called tvShows</p>
            <br/>
            <img src={mffImg1} />
            <br/>
            <p>Say what we want to do is return the whole array into uppercase. What we would do is create a new variable called newShows and set that equal to tvShows.map()….inside the map() we can call it whatever we want, for this example I will called it tvShow. Then we want to create a function that will do what we want. I am going to use a short hand function for this which is new in ES6 and is a much cleaner way of writing it.</p>
            <br/>
            <img src={mffImg2} />
            <br/>
            <p>Once we console log it you will see it displays everything in the array as uppercase.</p>
            <br/>
            <img src={mffImg3} />
            <br/>
            <h2>Find()</h2>
            <p>Find goes through each item in an array and once it finds the specific one you are looking for it will only return that first value that you are checking for. So I am going to create a variable called searchShows and set it to tvShows.find() inside we can name it whatever we want, so I am going to call it shows, then once again we will run our short hand function. What we want to do is find a show that beings with “The”.</p>
            <br/>
            <img src={mffImg4} />
            <br/>
            <p>Now this will only give is the first one in the array, its not going to give us all the names that have “The”. It kind of works like an if statement, it starts with the first one and checks if it contains “The” if it doesn’t then it moves to the next one and once it finds the first one that contains “The” it stops running and will not continue to check the rest of the array.</p>
            <br/>
            <img src={mffImg5} />
            <br/>
            <h2>Filter()</h2>
            <p>Filter works kind of the same way as find but returns us multiple values so it does run through and check the array but rather than stopping at one specific point it keeps going through the whole array and will get multiple values. So we want to return all the key words they are very short...the characters are not longer than a certain number. We would write it to return the ones that are less then 10 characters long.</p>
            <br/>
            <img src={mffImg6} />
            <br/>
            <p>And this would return us....</p>
            <br/>
            <img src={mffImg7} />
            <br/>
            <p>Another great example of using filter is say we have a list of movies in an array by title and also have the rating like this…</p>
            <br/>
            <img src={mffImg8} />
            <br/>
            <p>Now what we want to do is return to us only the movies have have a score of 9.5 or higher. We would write it out like this…</p>
            <br/>
            <img src={mffImg9} />
            <br/>
            <p>This is the result...</p>
            <br/>
            <img src={mffImg10} />
            <br/>
            <p>Lets go ahead and create another variable and call it badMovies and lets return the movies with a rating lower than 5…</p>
            <br/>
            <img src={mffImg11} />
            <br/>
            <p>Now Office Space should acutally be a 10 but this is just an example.....And to just recap....</p>
            <br/>
            <img src={mffImg12} />
            <br/>
            <div className="enjoyed">
                    <h2 className="enjoy-post">Enjoyed this post?</h2>
                    <img className="smileImg" src="" />
                </div>
                <a href="https://www.buymeacoffee.com/devcoder2" target="_blank" rel="noopener noreferrer" ><img className="buy-coffee" src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"/></a>
            </div>
            <Link to="/"><button className="allblogsBtn"><FontAwesomeIcon className="circleArrow" icon={faArrowAltCircleLeft}/>All Posts</button></Link>
        </MapFindFilterBLog>
    )
}

export default MapFindFilter
