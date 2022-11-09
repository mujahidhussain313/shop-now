import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import ProductsCompo from './ProductsCompo';
import { setProducts } from '../NewRedux/Actions/ProductAction';


const ProductsListing = () => {
    const product = useSelector((state)=>state);
    const dispatch = useDispatch();
     console.log("product:", product)

    const fetchProducts = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((err)=> {
            console.log("err", err)
        });

        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <div className='ui grid container'>
        <ProductsCompo />

    </div>
  )
}

export default ProductsListing;