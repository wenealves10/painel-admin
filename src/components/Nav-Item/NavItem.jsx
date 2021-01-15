/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './NavItem.css';

export default props => 
    (
        <a href={props.link}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
    )