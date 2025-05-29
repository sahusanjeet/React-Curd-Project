import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductsDetails = () => {
   
   const navigate = useNavigate();
   const params = useParams();
   console.log(params)
  return (
    <div>
        <h1 className='text-4xl font-thin mb-3'>{params.name}</h1>
        <h2 className='text-2xl font-thin mb-3'>Product Details</h2>
        <button onClick={() => navigate(-1)}  className="bg-white text-black px-4 py-2 rounded font-semibold">Go Back</button>
        </div>
  )
}

export default ProductsDetails