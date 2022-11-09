import { ActionTypes } from "../Constants/ActionType";
const initialState = {
    products:[]
};

export const ProductReducer = (state= initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
    
        default:
            return state;
    }
};

export const selectedProductsReducer = (state={}, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,  ...payload};
        case ActionTypes.REMOVE_PRODUCTS:
           return {};    
    
        default:
            return state;
    }
}