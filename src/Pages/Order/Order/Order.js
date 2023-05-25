import React, { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ["salad", "pizza", "soups", "desserts", "offered", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === "dessert");
    const soups = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");
    const drinks = menu.filter(item => item.category === "drinks");

    return (
        <div>

            <Helmet>
                <title>Bistro || Order Food</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <Cover img={orderCoverImg} title={"Order Food"}></Cover>

            <Tabs className='mt-10 p-6' defaultIndex={tabIndex} onSelect={(index) =>
                console.log(index)}>
                <TabList className='uppercase'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Offered</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel> <OrderTab items={salad}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={pizza}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={soups}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={desserts}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={offered}></OrderTab> </TabPanel>
                <TabPanel> <OrderTab items={drinks}></OrderTab> </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;