import React from 'react';
import PageHeader from '../PageHeader';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductInfo from './ProductInfo';
import ProductPriceHistory from './ProductPriceHistory';
import ProductQuantityHistory from './ProductQuantityHistory';

export default function ProductInfoTabs() {
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
                    <ProductInfo/>
                </TabPanel>
                <TabPanel>
                    <ProductPriceHistory/>
                </TabPanel>
                <TabPanel>
                    <ProductQuantityHistory/>
                </TabPanel>
            </Tabs>
        </div>
    );
}