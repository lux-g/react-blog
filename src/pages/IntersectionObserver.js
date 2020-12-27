import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import BlogContainer from '../styles/BlogsStyles';
import styled from "styled-components";

//IMAGES
import intersectionImg1 from '../images/setvariable.png';
import intersectionImg2 from '../images/class about.png';
import intersectionImg3 from '../images/threshold.png';
import intersectionImg4 from '../images/observer.png';
import intersectionImg5 from '../images/entries.png';
import intersectionImg6 from '../images/multiples observers.png';
import intersectionImg7 from '../images/entry.png';
import intersectionImg8 from '../images/false.png';
import intersectionImg9 from '../images/intersection-true.png';
import intersectionImg10 from '../images/intersection-if.png';
import intersectionImg11 from '../images/animcss.png';
import intersectionImg12 from '../images/intersection-else.png';
import intersectionImg13 from '../images/intersection ob.png';

const IntersectionBlog = styled.div`
    ${BlogContainer}
`;

function IntersectionObserver() {
    return (
        <IntersectionBlog>
            <div className="intersection">
                <Link to="/"><button className="allblogsTopBtn"><FontAwesomeIcon className="circleArrow" icon={faArrowAltCircleLeft}/>All Posts</button></Link>
                <h1>Intersection Observer Animations</h1>
                <p className="blogpost-pub">PUBLISHED: JULY 06, 2020</p>
                <hr class="line"/>
                <p>The Intersection Observer API provides an easy way to watch and register callbacks to trigger elements
                when they come into view on a page. Using Intersection Observer makes it less resource intensive and
                easier rather than listening for scroll events and checking if an element is about to enter the
                viewport. To setup the Intersection Observer API all you have to do is create the Intersection Observer
                object. It takes in a function which I made called fadeIn and an object which is called options. </p>
                <br/>
                <img src={intersectionImg1} />
                <br/>
                <p>Before we do anything else lets go ahead and create a variable for the element that we want the animation
                on. For this example I had a section with a class of ‘about’.</p>
                <br/>
                <img src={intersectionImg2} />
                <br/>
                <p>Next we want to set the threshold which is where on the page that the animation will start. This can be
                set by using a number. If you want the animation to kick in when it passes 50% of the visibility of the
                section then we can set the threshold to 0.5, 25% would 0.25 and so on. For this example I am going to
                set it to 0.5.</p>
                <br/>
                <img src={intersectionImg3} />
                <br/>
                <p>Next up we want to add an observer. Which means we want to observe the element which is the .about class.
                </p>
                <br/>
                <img src={intersectionImg4} />
                <br/>
                <p>Now what do we want to do when the .about section comes into visibility….we want to run the function that
                I added called ‘fadeIn’. So lets go ahead and create that function, now the function takes in something
                called ‘entries’. Entries are all the items that we have, currently we are just watching the one section
                ‘about’….but we can add more if we wanted to, which we would just add more observers like this.</p>
                <br/>
                <img src={intersectionImg5} />
                <img src={intersectionImg6} />
                <br/>
                <p>But we are only using this for one section so we just want the observer to observe the .about section. So
                what we want to do is run a forEach() loop on each entry so you have access to each individual item.
                </p>
                <br/>
                <img src={intersectionImg7} />
                <br/>
                <p>Lets go ahead and console.log(entry) and you will see the object called isIntersecting. It will show as
                false if .about is not in view and once you scroll down on the page and the .about section comes into
                view isIntersecting will change to true.</p>
                <br/>
                <img src={intersectionImg8} />
                <br/>
                <img src={intersectionImg9} />
                <br/>
                <p>And you will also notice that when isIntersection is true it add’s the classlist that I created called
                ‘anim’ which I will explain now. What we want to do in that fadeIn function is add an if statement
                saying if entry isIntersecting then add a classlist to the .about section called ‘anim’ which I created
                in the css style sheet.</p>
                <br/>
                <img src={intersectionImg10} />
                <br/>
                <img src={intersectionImg11} />
                <br/>
                <p>As you can see I added the .anim class with just the opacity set to 0.9 and on the .about class the
                opacity is set to 0 and also I added a transition all 900ms ease-in-out. So what happens is when the
                .anim class is added this sets the opacity to 0.9 and runs the transition effect. But the issue is that
                once this animation is run once it won’t run anymore once the page is loaded so what we need to do is
                add an else statement to remove the class when .about is not in view like this.</p>
                <br/>
                <img src={intersectionImg12} />
                <br/>
                <p>So putting it all together will look like this.</p>
                <br/>
                <img src={intersectionImg13} />
                <br/>
                <div className="enjoyed">
                    <h2 className="enjoy-post">Enjoyed this post?</h2>
                    <img className="smileImg" src="" />
                </div>
                <a href="https://www.buymeacoffee.com/devcoder2" target="_blank" rel="noopener noreferrer" ><img className="buy-coffee" src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"/></a>
            </div>
            <Link to="/"><button className="allblogsBtn"><FontAwesomeIcon className="circleArrow" icon={faArrowAltCircleLeft}/>All Posts</button></Link>
        </IntersectionBlog>
    )
}

export default IntersectionObserver
