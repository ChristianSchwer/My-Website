import React from 'react';
import '../../App.css';
import CardsProjects from '../CardsProjects';
import Cards from '../Cards';
import '../pages/Home.css';
import Footer from '../footerComponent/Footer.js';
import Blocks from '../Blocks';

function Home() {
    return (
        <div className="container-fluid">
            <div className='home-container'>
                <div className='column-left'>
                    <h1>
                        CHRIS HERE!
                    </h1>
                    <p>
                        Thanks you stopped by. <br />
                        This is the website about me and my hobbys.<br /> <br />
                        Contact me: office@s-christian.at
                        more About me 
                    </p>  
                </div>
                <div className='column-right'>
                    <img src='images/img-7.jpg' alt="It's Me" /> 
                </div>  
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
