import React from 'react';
import './Logo.css';
import Logo from '../../assets/images/blog.png';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    (<aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo"/>
        </a>
    </aside>)