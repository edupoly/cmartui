import React from 'react'
import { Link } from 'react-router-dom'
import { usePlaceOrderMutation } from '../../services/order.server'
import { useSelector } from 'react-redux'

function PlaceOrder() {
  var [placeOrderFn] = usePlaceOrderMutation()
  var {cartItems}=useSelector(state=>state.cart)
  function newPlaceOrder(){
    var order = {
      username:window.localStorage.getItem('username'),
      status:[{action:"placed",timestamp:Date.now()}],
      cartItems
    }
    placeOrderFn(order).then((res)=>{console.log(res)})
    console.log(order.username)
  }
  return (
    <div>
      <h2>Are your Sure to PlaceOrder</h2>
      <Link className='btn btn-warning'>Cancel</Link>
      <button className='btn btn-success' onClick={newPlaceOrder}>Yes Place Order</button>
    </div>
  )
}

export default PlaceOrder