import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import ProductsData from "./Warehouse/ProductsData";
import ProductCreate from "./Warehouse/ProductCreate";
import ProductInfoTabs from "./Warehouse/ProductInfoTabs";
import ProductEdit from "./Warehouse/ProductEdit";

export default class Layout extends Component {
    render() {
        return(
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<ProductsData/>}/>
                <Route exact path="/products/create" element={<ProductCreate/>}/>
                <Route exact path="/products/:id" element={<ProductInfoTabs/>}/>
                <Route exact path="/products/:id/edit" element={<ProductEdit/>}/>
            </Routes>
        );
    }
}