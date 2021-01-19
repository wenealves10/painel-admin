/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Logo from '../components/Logo/Logo';
import Nav from '../components/Nav/Nav';
import Routes from '../components/Main/Routes/Routes';
import Footer from '../components/Footer/Footer';

export default props => 
    (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )