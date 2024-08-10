import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decItemCount, incItemCount } from './cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
    var {cartItems} = useSelector(state=>state.cart)
    var {isLoggedIn} = useSelector(state=>state.auth)
    var navigate = useNavigate();
    var dispatch = useDispatch();
    console.log(cartItems)
    function placeOrder(){
      if(isLoggedIn){
        navigate("/placeOrder")
      }
      else{
        navigate("/login")
      }
    }
  return (
    <div>
        <h1>Cart</h1>
        <div className='d-flex flex-wrap'>
          <div className='w-50'>
            <h3>Cart Items</h3>
            <table className='table table-striped'>
            <thead>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </thead>
            <tbody>
              {
                cartItems.map((item)=>{
                  return <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className='btn btn-success' onClick={()=>{dispatch(incItemCount(item.id))}}>+</button>
                      <b className='p-2'>{item.count}</b>
                      <button className='btn btn-danger' onClick={()=>{dispatch(decItemCount(item.id))}}>-</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
          </div>
          <div className='w-50 px-5 text-center'>
              <h3>Bill</h3>
              <table className='table table-striped'>
                <thead>
                  <th>Product Name</th>
                  <th>Total Price</th>
                </thead>
                <tbody>
                  {
                    cartItems.map((item)=>{
                      return <tr>
                        <td>{item.name}</td>
                        <td>{item.price*item.count}</td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
              <h1>Total Bill: {cartItems.reduce((a,b)=>{return a+(b.price*b.count)},0)}</h1>
              <button className='btn btn-success' onClick={placeOrder}>Place Order</button>
          </div>
        </div>
        
    </div>
  )
}

export default Cart