import React from 'react';
import { Link } from 'react-router-dom';

function BlockItem(props) {
    return (
        <>
            <li className='blocks__item'>
                <Link className='blocks__item__link' to={props.path}>
                    <figure className='blocks__item__pic-wrap' data-category={props.label}>
                        <img 
                            src={props.src}
                            alt='Travel' 
                            className='blocks__item__img' 
                        />
                    </figure>
                </Link>
            </li>
        </>
    )
}

export default BlockItem
