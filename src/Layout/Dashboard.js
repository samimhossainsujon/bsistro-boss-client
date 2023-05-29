import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingCart, FaWallet, } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import useCart from '../Hooks/useCart';



const Dashboard = () => {

    const [cart] = useCart();

    return (

        <>
            <Helmet>
                <title>Bistro || DashBoard</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><NavLink to='/dashboard/home'><FaHome />User Home</NavLink></li>
                        <li><NavLink to='/dashboard/reservations'><FaCalendar />Reservations</NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>

                        <li>
                            <NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart
                                <h3 className='badge badge-secondary'>{cart.length}</h3>
                            </NavLink>

                        </li>



                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome /></NavLink>Home</li>
                        <li><NavLink to='/menu'><FiMenu /> Menu</NavLink></li>
                        <li><NavLink to='/order/salad'>Order Food</NavLink></li>



                    </ul>

                </div>
            </div>
        </>

    );
};

export default Dashboard;