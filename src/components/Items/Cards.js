import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>
                <b>Shop </b>(In Production)
            </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Knife'
                            price='120€'
                            label='Smith'
                            path='/shop'
                            alt='Knife'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Kiwi'
                            price='14€'
                            label='Plant'
                            path='/shop'
                            alt='Plant'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Another Kinfe'
                            price='200€'
                            label='Smith'
                            path='/shop'
                            alt='Smith'
                        />
                        <CardItem
                            src='images/img-travel-5.jpg'
                            text='Bottle opener'
                            price='15€'
                            label='Smith'
                            path='/shop'
                            alt='Smith'
                        />
                        <CardItem
                            src='images/img-travel-3.jpg'
                            text='Bonsai'
                            price='45€'
                            label='Plants'
                            path='/shop'
                            alt='Plants'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
