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
            element:<Welcomepage></Welcomepage>
          },
          {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
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
