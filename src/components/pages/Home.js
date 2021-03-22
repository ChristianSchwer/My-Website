import React from 'react';
import '../../App.css';
import CardsProjects from '../Items/CardsProjects';
import Cards from '../Items/Cards';
import '../pages/Home.css';
import Footer from '../footerComponent/Footer.js';
import Blocks from '../Items/Blocks';
import { useSpring, animated } from 'react-spring';

function Home() {
    const springleft = useSpring({
        to: { opacity:1, transform: 'translate(0px)' },
        from: { opacity: 0, transform: 'translate(-500px)' },
        config: { duration: 800 },
    })
    const springright = useSpring({
        to: { opacity:1, transform: 'translate(0px)' },
        from: { opacity: 0, transform: 'translate(500px)' },
        config: { duration: 800 },
    })
    return (
        <div className="container-fluid">
            <div className='home-container'>
                <animated.div style={springleft} className='column-left'>
                        <h1>
                            CHRIS HERE!
                        </h1>
                        <p>
                            Thanks you stopped by. <br />
                            This is the website about me and my hobbys.<br /> <br />
                            Contact me: office@s-christian.at
                            more About me 
                        </p>  
                    </animated.div>
                <animated.div style={springright} className='column-right'>
                        <img src='images/img-7.jpg' alt="It's Me" /> 
                    </animated.div>
            </div>
            <div className='passions-container'>
                <Blocks />
            </div>
            <div className='projects-container'>
                <CardsProjects />
            </div>
            <div className='shop-container'>
                <Cards />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
