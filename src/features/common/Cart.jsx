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
        <h1 style={{fontSize:'24px', textAlign:'center', backgroundColor:'whitesmoke',marginTop:'3px'}}>Cart</h1>
        <div className='d-flex flex-wrap'>
          <div className='w-50'>
            <h3 style={{fontSize:'20px', textAlign:'center'}}>Cart Items</h3>
            <table className='table table-success table-striped table-bordered border-primary' style={{borderWidth:'2px'}}>
            <thead className='table table-bordered border-black text-center'>
              <th className='border-1'>Product Name</th>
              <th className='border-1'>Price</th>
              <th className='border-1'>Action</th>
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
              <h3 style={{fontSize:'20px'}}>Bill</h3>
              <table className='table table-striped'>
              <thead className='table table-bordered border-black text-center'>
                <th className='border-1'>Product Name</th>
                <th className='border-1'>Price</th>
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
              <div style={{borderWidth:'2px', borderRadius:'10px', borderStyle:'solid', boxSizing:'initial', height:'fit-content', margin:'5px', padding:'10px'}}>
                <h1 style={{fontSize:'20px'}}>Total Bill: {cartItems.reduce((a,b)=>{return a+(b.price*b.count)},0)}</h1>
                <button className='btn btn-success' onClick={placeOrder}>Place Order</button>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Cart