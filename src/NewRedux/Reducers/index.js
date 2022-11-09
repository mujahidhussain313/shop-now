import { combineReducers } from "redux";
import { ProductReducer, selectedProductsReducer } from "./ProductReducer";


 const reducers = combineReducers({
    allProducts: ProductReducer,
    product: selectedProductsReducer
 });



 export default reducers;