import React from 'react'
import { useGetProductDetailsByIdQuery } from '../../services/product.service'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';

function ProductDetails() {
    var dispatch = useDispatch()
    var params = useParams();
    var {cartItems}=useSelector(state=>state.cart);
    var {isLoading,data:product}=useGetProductDetailsByIdQuery(params.id);
    console.log(product)
    function isInCart(){
        return cartItems.find((item)=>item.id=== +params.id)

    }
  return (
    <div className='d-flex mt-3'>
        {
            !isLoading && (
                <>
                    <div className='container w-50 '>
                        <h1 style={{fontSize:'22px'}}>{ product.name} </h1>
                        <img src={product.imgUrl} className='w-50 h-50 shadow-sm bg-body-tertiary rounded' alt="" style={{display:"flex",alignSelf:'center'}}/>
                        <br />
                        {!isInCart() && (<button onClick={()=>{dispatch(addToCart({...product,count:1}))}} className='btn btn-success mt-3 '>Add To Cart</button>)}
                        {isInCart() && (<Link to="/cart" className='btn btn-warning mt-3'>Goto To Cart</Link>)}                        
                    </div>
                    <div className= 'container w-50 text-center'>
                        <h2 style={{fontSize:'22px', textAlign:"left", display:'flex',justifyContent:'space-around',flex:0.5}}>Price :
                            <b style={{fontSize:'18px', textAlign:"left", flex:0.5}} >{product.price} </b>
                        </h2>
                        <h2 style={{fontSize:'22px', textAlign:"left", display:'flex',justifyContent:'space-around',flex:0.4}}>Company :
                            <b style={{fontSize:'18px', textAlign:"left", flex:0.6}}>{product.company} </b>
                        </h2>
                        <h2 style={{fontSize:'22px', textAlign:"left", display:'flex',justifyContent:'space-around', flex:0.4}}>Category :
                            <b style={{fontSize:'18px', textAlign:"left", flex:0.6}}>{product.category} </b>
                        </h2>                       
                    </div>
                </>
            )
        }
        
    </div>
  )
}

export default ProductDetails