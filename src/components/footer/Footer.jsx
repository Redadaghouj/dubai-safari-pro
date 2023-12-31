import React from 'react';
import './footer.css';
import { languages, currencies } from '../../data';
import SelectBox from './SelectBox';

function Footer() {
  return (
    <div className='footer section-py'>
      <div className='container'>
        <div className='lang-curr'>
          <div className='language'>
            <SelectBox data={languages} title='Language' />
          </div>
          <div className='currency'>
            <SelectBox data={currencies} title='Currency' />
          </div>
        </div>
        <div className='support'>
          <div className='title'>Support</div>
          <ul>
            <li>
              <a href='/'>Contact</a>
            </li>
            <li>
              <a href='/'>Legal Notice</a>
            </li>
            <li>
              <a href='/'>Privacy Policy</a>
            </li>
            <li>
              <a href='/'>General Terms</a>
            </li>
            <li>
              <a href='/'>Sitemap</a>
            </li>
          </ul>
        </div>
        <div className='company'>
          <div className='title'>Company</div>
          <ul>
            <li>
              <a href='/'>About Us</a>
            </li>
            <li>
              <a href='/'>Careers</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
            <li>
              <a href='/'>Press</a>
            </li>
            <li>
              <a href='/'>Gift Cards</a>
            </li>
            <li>
              <a href='/'>Magazine</a>
            </li>
            <li>
              <a href='/'>Travel Guides</a>
            </li>
          </ul>
        </div>
        <div className='contact'>
          <div className='work-with-us'>
            <div className='title'>Work With Us</div>
            <a href='/'>Become a Supplier</a>
            <a href='/'>Become an Affiliate Partner</a>
          </div>
          <div className='social-icons'>
            <div className='icon'>
              <i className='fa-brands fa-instagram'></i>
            </div>
            <div className='icon'>
              <i className='fa-brands fa-facebook'></i>
            </div>
            <div className='icon'>
              <i className='fa-brands fa-twitter'></i>
            </div>
            <div className='icon'>
              <i className='fa-brands fa-linkedin'></i>
            </div>
          </div>
          <div className='copyright'>
            <p>Copyright &copy; 2022 Dubai Safari</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
