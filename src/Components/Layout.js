import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import WarehouseData from "./Warehouse/WarehouseData";
import WarehouseCreate from "./Warehouse/WarehouseCreate";
import WarehouseView from "./Warehouse/WarehouseView";

export default class Layout extends Component {
    render() {
        return(
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<WarehouseData/>}/>
                <Route exact path="/products/create" element={<WarehouseCreate/>}/>
                <Route exact path="/products/:id" element={<WarehouseView/>}/>
            </Routes>
        );
    }
}