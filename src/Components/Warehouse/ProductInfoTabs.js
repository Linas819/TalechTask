import React from 'react';
import PageHeader from '../PageHeader';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WarehouseView from './ProductInfo';
import WarehousePriceHistory from './ProductPriceHistory';
import WarehouseQuantityHistory from './ProductQuantityHistory';

export default function WarehouseViewTabs() {
    const location = useLocation();
    const { id } = location.state;
    return(
        <div>
            <PageHeader header={"Product: "+id}/>
            <Tabs>
                <TabList>
                    <Tab>Product details</Tab>
                    <Tab>Price history</Tab>
                    <Tab>Quantity history</Tab>
                </TabList>
                <TabPanel>
                    <WarehouseView/>
                </TabPanel>
                <TabPanel>
                    <WarehousePriceHistory/>
                </TabPanel>
                <TabPanel>
                    <WarehouseQuantityHistory/>
                </TabPanel>
            </Tabs>
        </div>
    );
}