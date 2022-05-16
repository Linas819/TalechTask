import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from "./Home";
import WarehouseData from "./Warehouse/ProductsData";
import WarehouseCreate from "./Warehouse/ProductCreate";
import WarehouseViewTabs from "./Warehouse/ProductInfoTabs";
import WareHouseEdit from "./Warehouse/ProductEdit";

export default class Layout extends Component {
    render() {
        return(
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<WarehouseData/>}/>
                <Route exact path="/products/create" element={<WarehouseCreate/>}/>
                <Route exact path="/products/:id" element={<WarehouseViewTabs/>}/>
                <Route exact path="/products/:id/edit" element={<WareHouseEdit/>}/>
            </Routes>
        );
    }
}