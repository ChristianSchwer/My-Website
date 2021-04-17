import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact me
        </p>
        <p className='footer-subscription-text'>
          or Want to tell me something?
        </p>
        <div className='footer-input-area'>
          <form>
            <div>
              <label className='footer-label' for='name'> Name </label>
              <input 
                id='name'
                type='text' 
                name='name' 
                placeholder='Your Name' 
                className='footer-input' 
              />
            </div>
            <div>
              <label className='footer-label' for='email'> E-Mail </label>
              <input 
                id='email'
                type='email' 
                name='email' 
                placeholder='Your Email' 
                className='footer-input' 
              />
            </div>
            <div>
              <label className='footer-label' for='message'> Massage </label>
              <textarea 
                id='message'
                rows='6' 
                name='message' 
                placeholder='Your Message' 
                className='footer-input' 
              />
            </div>
          </form>
        </div>
      </section>
      <section className='footer-links'>
        <div className='footer-links-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL <i className='fab fa-typo3' />
            </Link>
          </div>
          <div className='social-icons'>
            <Link className='social-icon-link instagram'
              to={'//www.instagram.com/schwer_christian/'}
              target='_blank'
              aria-label='Instagram'
              >
                <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link github'
              to={'//github.com/ChristianSchwer'}
              target='_blank'
              aria-label='Github'
              >
                <i className='fab fa-github'></i>
            </Link>
            <Link className='social-icon-link puzzle'
              to='/'
              aria-label='Puzzle'
              >
                <i class="fas fa-puzzle-piece"><sub className='puzzle-number'>2</sub></i>
            </Link>
          </div>
          <div className='footer-links-item'>
            <Link to='/' className='footer-link'>
              Imprint
            </Link>
            <Link to='/' className='footer-link'>
              Privacy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default footer

