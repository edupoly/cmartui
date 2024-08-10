import React, { useEffect } from 'react'
import { useGetAllOrdersQuery, useLazyGetAllOrdersQuery } from '../../services/order.server'
import Orderstable from './Orderstable';

function Orders() {
    var {isLoading,data:orders}=useGetAllOrdersQuery();
    var [getAllOrdersFn]=useLazyGetAllOrdersQuery()
    console.log("orders::",orders)
    useEffect(()=>{
      getAllOrdersFn();
    },[])
  return (
    <div className='border border-2 border-danger m-2 p-2'>
      Orders
      <Orderstable orders={orders}></Orderstable>
    </div>
  )
}

export default Orders