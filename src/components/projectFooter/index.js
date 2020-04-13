import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import '../vars.css';
import './project-footer.scss';

const ProjectFooter = () => (
    <div className='project-footer'>
        <Link className='previous' to=''>previous</Link>
        <Link className='home' to='/'>JOEYMORELLO</Link>
        <Link className='next' to=''>next</Link>
    </div>
)

export default ProjectFooter