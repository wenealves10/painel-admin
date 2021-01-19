/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import './Login.css';


const login = (e) =>{
    e.preventDefault();
    const email = e.target.querySelector('input[type=email]').value;
    const password = e.target.querySelector('input[type=password]').value;
    axios.post('https://api.register.wenedev.site/user/login', {
        email,
        password
    }).then(result => {
        localStorage.setItem('token',result.data.token);
    }).catch(err =>{
        alert('Senha Errada');
    })
}


export default () => (
    <>
        <Header icon="key" title="Login" subtitle="Faça Login para usa o Painel" />   
        <form action="#" className="login" onSubmit={(e) => login(e)}>
            <input className="form-control mt-3 mb-3 w-50" type="email" name="email" placeholder="Digite seu e-mail..." id="email" required/>
            <input className="form-control w-50" type="password" name="password" placeholder="Senha***" id="password" required/>
            <button className="btn btn-success w-50 mt-3" type="submit">Login</button>
        </form>
    </>
)