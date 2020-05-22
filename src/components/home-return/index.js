import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import '../vars.css';
import './home.scss';

const HomeReturn = () => (
    <div className='home__container'>
        <Link className='home__link' to='/'>[home]</Link>
        <Link className='home__link' to='/'>[prev]</Link>
        <Link className='home__link' to='/'>[next]</Link>
    </div>
)

export default HomeReturn