import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ManagerDashboard() {
  return (
    <div>
        <h1>ManagerDashboard</h1>
        <Link to="addProduct" className="">Add Products</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="viewOrders" className=''>View Orders</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default ManagerDashboard