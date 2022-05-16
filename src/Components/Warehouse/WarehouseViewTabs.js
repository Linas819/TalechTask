import React from 'react';
import PageHeader from '../PageHeader';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WarehouseView from './WarehouseView';
import WarehousePriceHistory from './WarehousePriceHistory';

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
                </TabList>
                <TabPanel>
                    <WarehouseView/>
                </TabPanel>
                <TabPanel>
                    <WarehousePriceHistory/>
                </TabPanel>
            </Tabs>
        </div>
    );
}