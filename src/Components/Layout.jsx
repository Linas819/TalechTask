import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import WarehouseData from "./Warehouse/WarehouseData";

export default class Layout extends Component {
    render() {
        return(
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<WarehouseData/>}/>
            </Routes>
        );
    }
}