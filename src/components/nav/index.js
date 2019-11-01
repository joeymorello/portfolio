import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import logo from '../../images/smile-con.png';
import '../vars.css';
import './nav.css';

const Nav = () => (
    <nav>
        <div className='nav__items'>
            {/* <a className='nav__item--left' href='/'><img src={logo} alt='smile logo' className='nav__item--logo'/></a> */}
            <Link className='nav__item--link' to='#intro'><span>::</span>intro</Link>
            <Link className={window.location.href.indexOf('projects') > 0 || window.location.href.indexOf('category') > 0 ? 'nav__item--link active' : 'nav__item--link'}
            to='#projects'><span>::</span>projects</Link>
            <Link className={window.location.href.indexOf('cv') > 0 ? 'nav__item--link active' : 'nav__item--link'}
            to='#cv'><span>::</span>cv</Link>
            <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'}
            to='#contact'><span>::</span>contact</Link>
        </div>
    </nav>


    // <div className="topnav" id="myTopnav">
    //     <a href="#home" className="active">Home</a>
    //     <a href="#news">News</a>
    //     <a href="#contact">Contact</a>
    //     <a href="#about">About</a>
    //     <a href="javascript:void(0);" className="icon" onClick={} >
    //         <i className="fa fa-bars">werk</i>
    //     </a>
    // </div>  

    // function myFunction() {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //     x.className += " responsive";
    //     } else {
    //     x.className = "topnav";
    //     }
    // }
)

export default Nav