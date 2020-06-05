import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import '../vars.css';
import './home.scss';

const HomeReturn = () => (
    <div className='home__container'>
        <Link className='home__link' to='/#projects'>[<span>home</span>]</Link>
        {/* <Link className='home__link home__link--next' to='/'>[prev]</Link>
        <Link className='home__link home__link--next' to='/'>[next]</Link> */}
    </div>
)

export default HomeReturn