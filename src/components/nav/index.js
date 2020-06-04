import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import '../vars.css';
import './nav.scss';

const Nav = () => (
    <nav>
        <div className='nav__items'>       
                <Link className='nav__item--link' to='#intro'><span>::</span>intro</Link>
                <Link className={window.location.href.indexOf('projects') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link'}
                to='#projects'><span>::</span>projects</Link>
                <Link className={window.location.href.indexOf('cv') > 0 ? 'nav__item--link active' : 'nav__item--link'}
                to='#cv'><span>::</span>cv</Link>
                <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'}
                to='#contact'><span>::</span>contact</Link>
        </div>
    </nav>
)

export default Nav