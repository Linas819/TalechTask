import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PageHeader from './PageHeader';

export default class Home extends Component {
    render() {
        return(
            <div>
                <PageHeader header="Home"/>
                <NavLink to={"/products"}>
                    <button style={{backgroundColor: '#4CAF50'}}>Products</button>
                </NavLink>
            </div>
        );
    }
}