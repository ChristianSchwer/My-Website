import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-1.jpg'
                            label='Website'
                            path='/programming'
                        />
                        <CardItem 
                            src='images/img-5.jpg'
                            label='Game'
                            path='/programming'
                        />
                        <CardItem
                            src='images/img-6.jpg'
                            label='Another Website'
                            path='/programming'
                        />
                        <CardItem
                            src='images/img-9.jpg'
                            label='Kiwi Bonsai'
                            path='/plants'
                        />
                        <CardItem
                            src='images/img-7.jpg'
                            label='Kitchen Knife'
                            path='/smith'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
