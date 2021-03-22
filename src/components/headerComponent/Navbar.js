import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Programming' className='nav-links' onClick={closeMobileMenu}>
                                Programming
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Plants' className='nav-links' onClick={closeMobileMenu}>
                                Plants
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Smith' className='nav-links' onClick={closeMobileMenu}>
                                Smith
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Travel' className='nav-links' onClick={closeMobileMenu}>
                                Travel
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links instagram'
                            to={'//www.instagram.com/schwer_christian/'}
                            target='_blank'
                            aria-label='Instagram'
                            onClick={closeMobileMenu}
                            >
                                <i className='fab fa-instagram'></i>
                            </Link>
                            <Link className='nav-links github'
                            to={'//github.com/ChristianSchwer'}
                            target='_blank'
                            aria-label='Github'
                            onClick={closeMobileMenu}
                            >
                                <i className='fab fa-github'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar