import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

//IMAGES
import nightModeImgOne from '../images/root.png';
import nightModeImgTwo from '../images/nightmode-class.png';
import nightModeImgThree from '../images/variables.png';
import nightModeImgFour from '../images/eventlisten.png';
import nightModeImgFive from '../images/if.png';
import nightModeImgSix from '../images/ifcurrenttheme.png';
import nightModeImgSeven from '../images/else.png';
import nightModeImgEight from '../images/fullnightmodecode.png';

function Nightmode() {
    return (
        <div className="night-mode-blog">
            <div className="nightmode">
                <Link to="/"><button className="allblogsTopBtn"><FontAwesomeIcon className="circleArrow" icon={faArrowAltCircleLeft}/>All Posts</button></Link>
                <h1>Night Mode Toggle with CSS & Javascript</h1>
                <p className="blogpost-pub">PUBLISHED: JULY 07, 2020</p>
                <hr className="line"/>
                <p>Ah yes the infamous night mode. Its been a trend lately and honestly I have all my devices set to dark mode and I really enjoy a website that has this option as well. So to setup this up is actually quite easy but the harder part is saving it to the local storage in javascript because once the page is refreshed or if you click on another page it looses the dark mode setting. To get the settings to stay you need to save some things into the local storage which requires just a little bit of javascript. Local storage allows you to save things even after the browser is refreshed.</p>
                <br/>
                <p>What we will do first is setup the toggle button. I am using 2 icons from fontawesome.com, a moon and a
                sun. What we need to do before that is setup our default colors on our page using css variables like
                this...</p>
                <br/>
                <img className="night-mode-images" src={nightModeImgOne} />
                <br/>
                <p>Then will will need to add those colors to our other elements in CSS. Then we want to make a class in CSS
                and we will call it .night-mode. Then copy everything from the root and into the .night-mode class.</p>
                <br/>
                <img className="night-mode-images" src={nightModeImgTwo} />
                <br/>  
                <p>Now lets get into some javascript. Let’s go ahead and create our variables. We want to create 3 variables
                for the moon icon, the body of the page and a variable for the local storage. For the local storage we
                will call it currentTheme and set it to get item.</p>
                <br/>  
                <img className="night-mode-images" src={nightModeImgThree} />
                <br/>   
                <p>Next lets go ahead and add the click event listener as we want the function to run when the font awesome
                icon is clicked and lets write out what we want to do in the function. What we want to happen is when
                the moon icon is clicked we want it to toggle the .night-mode class to the body of the page and we also
                want the moon icon to get replaced with a sun icon at the same time. Now the moon icon is already on the
                main page in out html but I did not add the sun icon into the html, we want to add the sun icon into our
                CSS and call it by its class name which is .fa-sun in which Ive given it a orange/yellowish color. What
                we want to happen is when the moon icon is clicked it will toggle the sun icon class which will replace
                the moon icon.</p>
                <br/>     
                <img className="night-mode-images" src={nightModeImgFour} /> 
                <br/>  
                <p>Right now this function will run correctly and everything will switch over to night mode on the click but
                what happens when we reload the page and click on another page…..it loses the settings and goes back to
                the default colors. We want be be able to save these settings. We already set the variable setting the
                local storage to get item and calling it currentTheme. So the next step is to add an if statement in our
                function and we want to say if the body contains a class of .nightmode then do something….and that
                something would be to set the item to the local storage. Set item takes a key and a value. In this case
                the key is called currentTheme and the value can be set to anything we want but we will call it
                themeActive, it doesn’t matter what you call it.</p>
                <br/>  
                <img className="night-mode-images" src={nightModeImgFive} />
                <br/> 
                <p>At this point it still won’t save any of the settings. So we will create another if statement before our
                function and say if (currentTheme) which means if currentTheme is true then we want to add the class of
                .night-mode and toggle the class of fa-sun.</p>
                <br/>
                <img className="night-mode-images" src={nightModeImgSix} />
                <br/>
                <p>After doing this the theme will now show in local storage but now it will always stay in the night mode
                no matter what. We need to be able to remove the dark mode theme form the storage as well so the site
                will go back to normal. So what we need to do is after the if statement in our function we need to add
                and else statement that will remove item currentTheme from our local storage like this…</p>
                <br/>
                <img className="night-mode-images" src={nightModeImgSeven} />
                <br/>
                <p>The full code will look like this.</p>
                <br/>
                <img className="night-mode-images" src={nightModeImgEight} />
                <br/>
                <div className="enjoyed">
                    <h2 className="enjoy-post">Enjoyed this post?</h2>
                    <img className="smileImg" src="" />
                </div>
                <a href="https://www.buymeacoffee.com/devcoder2" target="_blank" rel="noopener noreferrer" ><img className="buy-coffee" src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"/></a>
            </div>
            <Link to="/"><button className="allblogsBtn"><FontAwesomeIcon className="circleArrow" icon={faArrowAltCircleLeft}/>All Posts</button></Link>
        </div>
    )
}

export default Nightmode
