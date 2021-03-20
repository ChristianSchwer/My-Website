import React from 'react'
import BlockItem from './BlockItem';
import './Blocks.css';

function Blocks() {
    return (
        <div className='blocks__container'>
            <ul className='blocks__items'>
                <BlockItem 
                    src='images/img-9.jpg'
                    label='Programming'
                    path='/programming'
                />
                <BlockItem 
                    src='images/img-2.jpg'
                    label='Plants'
                    path='/plants'
                />
                <BlockItem
                    src='images/img-3.jpg'
                    label='Forging'
                    path='/smith'
                />
                <BlockItem
                    src='images/img-4.jpg'
                    label='Travel'
                    path='/travel'
                />
            </ul>
        </div>
    )
}

export default Blocks
