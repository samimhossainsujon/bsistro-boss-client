import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Menu from "../../Pages/Menu/Menu/Menu";
import Order from "../../Pages/Order/Order/Order";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivetRoute";
import Secret from "../../Pages/Shared/Secret/Secret";
import Dashboard from "../../Layout/Dashboard";
import MyCart from "../../Pages/Dashboard/MyCart/MyCart";
import AdminRoute from "./AdminRoute";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../../Pages/Dashboard/AddItem/AddItem";
import ManageItems from "../../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../../Pages/Dashboard/Payment/Payment";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
        path: 'menu', 
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
    children: [
      {
        path: 'mycart', 
        element: <MyCart></MyCart>
      },

      {
        path:'payment',
        element: <Payment></Payment>
      },
     
      // admin routes
      {
        path: 'allusers', 
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manageitems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
]);