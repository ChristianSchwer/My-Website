import React from 'react';
import CardProjectItem from './CardProjectItem';
import './CardsProjects.css';

function CardsProjects() {
    return (
        <div className='cardsp'>
            <h1>Projects</h1>
            <div className='cardsp__container'>
                <div className='cardsp__wrapper'>
                    <ul className='cardsp__items'>
                        <CardProjectItem 
                            src='images/img-travel-1.jpg'
                            label='Kitchen Knife'
                            path='/smith'
                            alt='KitchenKnife'
                        />
                        <CardProjectItem 
                            src='images/img-5.jpg'
                            label='Game'
                            path='/programming'
                            alt='Game'
                        />
                        <CardProjectItem
                            src='images/img-home.jpg'
                            label='Kiwi Bonsai'
                            path='/plants'
                            alt='KiwiBonsai'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsProjects
