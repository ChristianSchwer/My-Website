import React, {Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                LOGO
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Programming">Programming</Link>
                    </li>
                    <li>
                        <Link to="/Plants">Plants</Link>
                    </li>
                    <li>
                        <Link to="/Smith">Smith</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }
}

export default Header;
