import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ManagerDashboard() {
  return (
    <div>
        <h1 style={{fontSize:'26px', textAlign:'center', margin:'3px', backgroundColor:'darkgray', color:'#fff', padding:'4px 0px 8px 0',}}>ManagerDashboard</h1>
        <Link to="addProduct" className="shadow-sm bg-body-tertiary rounded p-2 m-2 text-center"><button className='btn  border-0 m-2 bg-transparent'>Add Products</button></Link>
        <Link to="viewOrders" className="shadow-sm bg-body-tertiary rounded p-2 m-2"><button className=' btn  border-0 m-2 bg-transparent'>View Orders</button></Link>
        
        {/* <Link to="viewOrders" className=''>View Orders</Link> */}
        <Outlet></Outlet>
    </div>
  )
}

export default ManagerDashboard