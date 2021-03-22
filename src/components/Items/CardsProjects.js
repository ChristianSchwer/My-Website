import React from 'react';
import CardItem from './CardItem';
import './CardsProjects.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-travel-1.jpg'
                            label='Website'
                            path='/programming'
                            alt='Website'
                        />
                        <CardItem 
                            src='images/img-5.jpg'
                            label='Game'
                            path='/programming'
                            alt='Game'
                        />
                        <CardItem
                            src='images/img-6.jpg'
                            label='Another Website'
                            path='/programming'
                            alt='AnotherWebsite'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            label='Kiwi Bonsai'
                            path='/plants'
                            alt='KiwiBonsai'
                        />
                        <CardItem
                            src='images/img-home.jpg'
                            label='Kitchen Knife'
                            path='/smith'
                            alt='KitchenKnife'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
