/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react';
import './Main.css';

import Header from '../Header/Header';


export default props => (
    <Fragment>
        <Header/>
        <main className="content">
            Main
        </main>
    </Fragment>
)