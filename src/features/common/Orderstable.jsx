import React from 'react'
import { Link } from 'react-router-dom'
import { useAcceptOrderMutation, useDeleteOrderMutation, useDispatchOrderMutation, useLazyGetAllOrdersQuery, useSetOrderDeliveredMutation } from '../../services/order.server'
import { useSelector } from 'react-redux'
function Orderstable({orders}) {
    console.log(orders)
    var {role}=useSelector(state=>state.auth)
    var [deleteOrederFn]=useDeleteOrderMutation()
    var [getAllOrdersFn]=useLazyGetAllOrdersQuery()
    var [acceptOrderFn]=useAcceptOrderMutation()
    var [dispatchOrderFn]=useDispatchOrderMutation()
    var [deliveredFn] = useSetOrderDeliveredMutation();
    function deleteOrder(order){
        deleteOrederFn(order).then(()=>{
            getAllOrdersFn();
        })
    }
    function acceptOrder(order){
        var temp = JSON.parse(JSON.stringify(order))
        temp.status.push({
            action:'accepted',
            timestamp:Date.now()
        })
        acceptOrderFn(temp).then(()=>{getAllOrdersFn()})
    }
    function dispatchOrder(order){
        var temp = JSON.parse(JSON.stringify(order))
        temp.status.push({
            action:'dispatched',
            timestamp:Date.now()
        })
        dispatchOrderFn(temp).then(()=>{getAllOrdersFn()})
    }
    function isAccepted(order){
        console.log(order)
        var x = order?.status.find((s)=>{
            if(s.action==='accepted'){
                return true
            }
        })
        return x
    }
    function isDispatched(order){
        console.log(order)
        var x = order?.status.find((s)=>{
            if(s.action==='dispatched'){
                return true
            }
        })
        return x
    }
    function isDelivered(order){
        console.log(order)
        var x = order?.status.find((s)=>{
            if(s.action==='delivered'){
                return true
            }
        })
        return x
    }
    function delivered(order){
        var temp = JSON.parse(JSON.stringify(order))
        temp.status.push({
            action:'delivered',
            timestamp:Date.now()
        })
        deliveredFn(temp).then(()=>{getAllOrdersFn()})
    }
  return (
    <div className='border border-2 border-info m-2 p-2'>
        <h1 className='fs-4'>Orderstable</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>User Name</th>
                    <th>No Items</th>
                    <th>View More</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
            {
                orders?.map((order)=>{
                    return (
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.username}</td>
                            <td>{order.cartItems.length}</td>
                            <td><Link to="">View More...</Link></td>
                            <td>

                                <b>{!isAccepted(order) && "Waiting for Approval"}</b>
                                <b>{isAccepted(order) && "Accepted"}</b>
                                <b>{isDispatched(order) && "Dispatched"}</b>
                                <b>{isDelivered(order) && "Delivered"}</b>
                                {role==='manager' && <>
                                    {!isAccepted(order) && (<>
                                        <button className='btn btn-danger mx-2 px-2' onClick={()=>{deleteOrder(order)}}>Delete</button>
                                        <button className='btn btn-success mx-2 px-2' onClick={()=>{acceptOrder(order)}}>Accept</button>
                                    </>)}
                                    {
                                        isAccepted(order) && !isDispatched(order) && <button className='btn btn-info mx-2 px-2' onClick={()=>{dispatchOrder(order)}}>Dispatch</button>
                                    }
                                    {
                                        isDispatched(order) && !isDelivered(order) && <button className='btn btn-secondary mx-2 px-2' onClick={()=>{delivered(order)}}>Delivered</button>
                                    }
                                </>}
                                
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        
    </div>
  )
}

export default Orderstable