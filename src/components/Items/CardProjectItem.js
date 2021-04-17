import React from 'react';
import { Link } from 'react-router-dom';

function CardProjectItem(props) {
    return (
        <>
            <li className='cardsp__item'>
                <Link className='cardsp__item__link' to={props.path}>
                    <figure className='cardsp__item__pic-wrap' data-category={props.label}>
                        <img 
                            src={props.src}
                            alt={props.alt}
                            className='cardsp__item__img' 
                        />
                    </figure>
                </Link>
            </li>
        </>
    )
}

export default CardProjectItem
