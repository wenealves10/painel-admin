/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react';
import './Main.css';

import Header from '../Header/Header';


export default props => (
    <Fragment>
        <Header {...props}/>
        <main className="content container">
            <div className="pt-3 mt-3">
                {props.children}
            </div>
        </main>
    </Fragment>
)