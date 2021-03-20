import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <span>
                <b>Shop </b>(In Production)
            </span>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-9.jpg'
                            text='Knife'
                            price='120€'
                            label='Smith'
                            path='/shop'
                        />
                        <CardItem 
                            src='images/img-2.jpg'
                            text='Kiwi'
                            price='14€'
                            label='Plant'
                            path='/shop'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Another Kinfe'
                            price='200€'
                            label='Smith'
                            path='/shop'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Bottle opener'
                            price='15€'
                            label='Smith'
                            path='/shop'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Bonsai'
                            price='45€'
                            label='Plants'
                            path='/shop'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
