import React from 'react'
import { useGetAllProductsQuery } from '../../services/product.service'
import { Link } from 'react-router-dom'

function Products() {
    var {isLoading, data}=useGetAllProductsQuery()
    console.log(data)
  return (
    <div>
        <h2>Products</h2>
        {
            isLoading===false && (data.map((product)=>{
                return <li>
                    
                        <Link to={`/productDetails/${product.id}`}>{product.name}</Link>
                    </li>
            }))
        }
    </div>
  )
}

export default Products