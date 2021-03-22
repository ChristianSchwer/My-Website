import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import BlockItem from './BlockItem';
import './Blocks.css';

function Blocks() {
    const [blocks, setBlocks] = useState(false);

    const startAnimation = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 600) {
            setBlocks(true);
        } else {
            setBlocks(false);
        }
    }

    window.addEventListener('scroll', startAnimation);

    const transition1 = useTransition(blocks, {
        from: { transform: 'translate(50px, -200px)', opacity: 0 },
        enter: { transform: 'translate(0px, 0px)', opacity: 1 },
        leave: { transform: 'translate(50px, -200px)', opacity: 0 },
        config: { duration:1500 },
    });
    const transition2 = useTransition(blocks, {
        from: { transform: 'translate(-50px, 200px)', opacity: 0 },
        enter: { transform: 'translate(0px, 0px)', opacity: 1 },
        leave: { transform: 'translate(-50px, 200px)', opacity: 0 },
        config: { duration: 1500 },
    });

    return (
        <div className='blocks__container'>
            <ul className='blocks__items'>
                {transition1((style, item) => item ? <animated.div style={style} > 
                    <BlockItem
                        src='images/img-9.jpg'
                        label='Programming'
                        path='/programming'
                        alt='Programming'
                    /></animated.div>: ''
                )}
                {transition2((style, item) => item ? <animated.div style={style} > 
                    <BlockItem 
                        src='images/img-2.jpg'
                        label='Plants'
                        path='/plants'
                        alt='Plants'
                    /></animated.div>: ''
                )}
                {transition1((style, item) => item ? <animated.div style={style} >
                    <BlockItem
                        src='images/img-3.jpg'
                        label='Forging'
                        path='/smith'
                        alt='Smith'
                    /></animated.div>: ''
                )}
                {transition2((style, item) => item ? <animated.div style={style} >
                    <BlockItem
                        src='images/img-4.jpg'
                        label='Travel'
                        path='/travel'
                        alt='Travel'
                    /></animated.div>: ''
                )}
            </ul>
        </div>
    );
}

export default Blocks
