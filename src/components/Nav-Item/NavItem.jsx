/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.css';

export default props => 
    (
        <Link to={props.link}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </Link>
    )