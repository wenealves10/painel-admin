/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './Nav.css';
import NavItem from '../Nav-Item/NavItem';

export default props => (
    <aside className="menu-area">
        <nav className="menu">
        <NavItem icon="home" link="#/" label="Inicío"/>
        <NavItem icon="users" link="#/users" label="Usuários"/>
        </nav>
    </aside>
)