/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import axios from 'axios';
import './Users.css';
import Main from '../Main/Main';

const headersProps ={
    title: 'Usuários',
    icon: 'users',
    subtitle: 'Cadastro, Atualizar, Apagar e Lista Usuários'
};

const axiosConfig = {
    headers: {
        Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm5hbWUiOiJUZXN0ZSBUZXN0ZSIsImlhdCI6MTYxMDgwNzQwNCwiZXhwIjoxNjEwOTgwMjA0fQ.RRk7ES13FzAc0G4LVvJLZBijpqtnNFgY8_L9f6X9Byk`
    }
}

const baseUrl = 'https://api.register.wenedev.site/';

const initialState = {
    user: {name: '', year: ''},
    list: []
};

export default class Users extends Component{

    constructor(props){
        super(props);
        this.state = {...initialState};
        this.clear = this.clear.bind(this);
        this.save = this.save.bind(this);
    }

    componentWillMount(){
        axios(`${baseUrl}users`,axiosConfig).then((result) => {
            this.setState({list: result.data.data})
        }).catch((err) => {
            alert('Erro');
        });
    }

    clear(){
        this.setState({user: initialState.user});
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}user/${user.id}` : `${baseUrl}user/create`;
        axios[method](url, user, axiosConfig).then((result) => {
            axios(`${baseUrl}users`,axiosConfig).then((result) => {
                const { data } = result.data;
                const user = data[data.length -1]
                const list = this.getUpdateList(user);
                this.setState({user: initialState.user, list});
            }).catch((err) => {
                alert('Erro');
            });
        }).catch((err) => {
            alert(`Erro ${this.state.list[0]}`);
            this.clear();
        });
    }

    getUpdateList(user, add = true){
        const list = this.state.list.filter(usr => usr.id !== user.id);
        if(add) {
            list.unshift(user)
        };
        return list;
    }

    updateField(event){
        const user = {...this.state.user};
        user[event.target.name] = event.target.value;
        this.setState({user});
    }

    load(user){
        this.setState({user});
    }

    remove(user){
        axios.delete(`${baseUrl}user/${user.id}`,axiosConfig).then(result => {
           const list = this.getUpdateList(user, false);
           this.setState({list});
        }).catch(err =>{
            alert('Erro')
        })
    }

    renderTable(){
        return(
                <div className="table-responsive">
                    <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>UID</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
        )
    }

    renderRows(){
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.year}</td>
                    <td>{user.create}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    renderForm(){
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Nome:</label>
                            <input type="text" className="form-control" name="name" id="name" value={this.state.user.name} placeholder="Digite seu nome..." onChange={e => this.updateField(e)}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="year">Idade:</label>
                            <input type="number" className="form-control" name="year" id="year" value={this.state.user.year} placeholder="..." onChange={e => this.updateField(e)}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={this.save}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2" onClick={this.clear}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return (
            <Main {...headersProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}