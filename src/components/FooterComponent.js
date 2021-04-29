import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
      <footer className='site-footer'>
      <p>This is a conflict</p>
        <div className='container'>
          <div className='row'>
            <div className='links' className='col-4 col-sm-2 offset-1'>
              <ul className='list-unstyled'>
                <a>
                  <Link to='/home'>Home</Link>
                </a> <br/>
                <a>
                  <Link to='#'>Menu</Link>
                </a>{' '}
                <br />
                <a>
                  <Link to='#'>Events</Link>
                </a>{' '}
                <br />
                <a>
                    <a><Link to='#'>Blog</Link></a> <br/>
                  <Link to='/aboutus'>About</Link>
                </a>{' '}
                <br />
                <a>
                  <Link to='/contactus'>Contact Us</Link>
                </a>
                <br />
                <a>
                  <Link to='/reservations'>Reservations</Link>
                </a>
              </ul>
            </div>
            <div className='col-sm-4 text-right offset-4'>
              <a role='button' className='btn btn-link' href='tel:+12065551234'>
                <i className='fa fa-phone' /> 1-800Nerdvana
              </a>
              <br />
              <a
                role='button'
                className='btn btn-link'
                href='mailto:notreal@notreal.co'
              >
                <i className='fa fa-home' /> 5757 Main St
              </a>
              <br />
              <a
                className='btn btn-social-icon btn-instagram'
                href='http://instagram.com/'
              >
                <i className='fa fa-instagram' />
              </a>{' '}
              <a
                className='btn btn-social-icon btn-facebook'
                href='http://www.facebook.com/'
              >
                <i className='fa fa-facebook' />
              </a>{' '}
              <a
                className='btn btn-social-icon btn-twitter'
                href='http://twitter.com/'
              >
                <i className='fa fa-twitter' />
              </a>{' '}
              <a
                className='btn btn-social-icon btn-google'
                href='http://youtube.com/'
              >
                <i className='fa fa-youtube' />
              </a>
            </div>
          </div>
        </div>
      </footer> //{' '} IS USED TO CREATE WHITE SPACE IN JS
    )
}

export default Footer;