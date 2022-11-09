import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import { Link } from 'react-router-dom';
const ProductsCompo = () => {
    const products = useSelector((state)=>state.allProducts.products)

   const renderList = products.map((product)=>{

    const {id, title, image, price, category, description} = product;
    return(
        <>
        <Link to={`/product/${id}`} >
    <div style={{marginTop:"20px"}} className='ui link cards' key={id}>
        
    <div className="card">
      <div className="image">
        <img style={{height:"200px"}} src={image}  alt={title} />
      </div>
      <div style={{height:"150px", overflow: "hidden"}} className="content">
        <a  className="header">{title}</a>
        <div className="header">$ {price}</div>
        <div className="meta">{category}</div>
        
      </div>
    </div>
   
    </div>
    </Link>
    </>


    )
   })
  return (
    <>{renderList}</>
  )
}

export default ProductsCompo;