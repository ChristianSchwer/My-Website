import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join for free!
        </p>
        <p className='footer-subscription-text'>
          unscrup any time
        </p>
        <div className='input-areas'>
          <form>
            <input 
              type='email' 
              name='email' 
              placeholder='Your Email' 
              className='footer-input' 
            />
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Contact</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Github</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>TRVL © 2021</small>
          <div className='social-icons'>
            <Link className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              >
                <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
              >
                <i className='fab fa-github'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default footer

