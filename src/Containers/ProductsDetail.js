import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../NewRedux/Actions/ProductAction';

const ProductsDetail = () => {
     
    const {productId} = useParams();
    console.log(productId)
     const product = useSelector((state)=> state.product)
    //  console.log(product)
     const {id, title, image, price, category, description} = product;
    const dispatch = useDispatch();

    const getProductDetail = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log("Error", err)
        });

        dispatch(selectedProducts(response.data))
    }
    useEffect(()=>{
       if(productId && productId !== "") getProductDetail();

       return () =>{
        dispatch(removeSelectedProducts())
       }
    },[productId]);


  return (

    <div className='ui grid container'>

      {Object.keys(product).length === 0 ? (
        <div style={{margin: "50px"}}><h1>...loading</h1></div>
      ) : (
      
        <div className='ui placeholder segment' style={{marginTop: "40px"}}>

      <div className='ui two column stackable center aligned grid'>
        <div className='ui vertical divider'></div>
        <div className='middle aligned row'>
          <div className='column lp'>
            <img style={{maxHeight: "350px", maxWidth: "250px"}} className='ui fluid image' src={image} />
          </div>

          <div className='column rp'>
            <h1>{title}</h1>
            <h2>
              <a className='ui teal tag label'>${price}</a>
            </h2>
            <h3 className='ui brown block header'>{category}</h3>
            <p>{description}</p>
            <div className='ui vertical animated button' tabIndex="0">
              <div className='hiden content'>
                <i className='shop icon'></i>
              </div>
              <div className='visible content'>Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>

      )}
    
    </div>
  )
}

export default ProductsDetail;