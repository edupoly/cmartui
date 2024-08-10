import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './features/common/Home';
import Login from './features/user/Login';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Dashboard from './features/dashboard/Dashboard';
import Welcomepage from './features/common/Welcomepage';
import AddProduct from './features/dashboard/AddProduct';
import Products from './features/common/Products';
import ProductDetails from './features/common/ProductDetails';
import Cart from './features/common/Cart';
import PlaceOrder from './features/common/PlaceOrder';
import Orders from './features/common/Orders';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'',
        element:<Home></Home>,
        children:[
          {
            path:"",
            element:<Products></Products>
          },
          {
            path:"/productDetails/:id",
            element:<ProductDetails></ProductDetails>
          },
          {
            path:"/cart",
            element:<Cart></Cart>
          },
          {
            path:"/placeOrder",
            element:<PlaceOrder></PlaceOrder>
          },
          {
            path:"/dashboard",
            element:<Dashboard></Dashboard>,
            children:[
              {
                path:"/dashboard/addProduct",
                element:<AddProduct></AddProduct>
              },
              {
                path:"/dashboard/viewOrders",
                element:<Orders></Orders>
              }
            ]
          },
          {
            path:"/login",
            element:<Login></Login>
          }
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
