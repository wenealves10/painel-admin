/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Main from '../Main/Main';
import './Home.css';


export default props => (
    <Main icon="home" title="Inicio" subtitle="Painel Admin">
        <div className="display-4 text-muted">
            Bem Vindo!
        </div>
        <hr/>
        <p className="p-1">Painel de Gestão de Usuários</p>
    </Main>
)

