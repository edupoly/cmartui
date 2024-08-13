import React from 'react'
import { useGetAllProductsQuery } from '../../services/product.service'
import { Link } from 'react-router-dom'

function Products() {
    var {isLoading, data}=useGetAllProductsQuery()
    console.log(data)
  return (
    <div className=" container mt-3"  >
        <h2>Products</h2>
        <ul className='shadow-sm bg-body-tertiary rounded'>
        {
            isLoading===false && (data.map((product)=>{
                return (
                  <li style={{listStyle:'alpha'}}>
                      <Link to={`/productDetails/${product.id}`}>
                        <button className='btn btn-light'> {product.name} </button>
                      </Link>
                  </li>)
            }))
        }
        </ul>
    </div>
  )
}

export default Products