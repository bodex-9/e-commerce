import { createSlice } from "@reduxjs/toolkit";

const savedItem = localStorage.getItem("cartitems")
const initialState = savedItem ? JSON.parse(savedItem):[];
export const Cart = createSlice({
    initialState,
    name:'cart',
    reducers:{
            AddCart:(state,action)=>{
                const findItem = state.find((item) => String(item.id) === String(action.payload.id));
                if (findItem)
                {
                    findItem.quantity += 1;
                }
                else{
                    const productClone = {...action.payload,quantity:1}
                    state.push(productClone);
                }
                localStorage.setItem("cartitems",JSON.stringify(state))
            },
            DeleteCart:(state,action)=>{
                        const newState = state.filter((item) => String(item.id) !== String(action.payload.id))
                         localStorage.setItem("cartitems",JSON.stringify(newState))
                        return newState;
            },
            Clear:(state,action) =>
            {
                 localStorage.removeItem("cartitems")
                    return[];
            },
            icreament:(state,action) =>{
                const newValue = state.find((item) => String(item.id) === String(action.payload.id) );
                if(newValue)
                {
                    newValue.quantity += 1;
                }
                 localStorage.setItem("cartitems",JSON.stringify(state))
            },
            decrement:(state,action) =>
            {
                const newValue = state.find((item) => String(item.id) === String(action.payload.id) );
                if(newValue && newValue.quantity > 1)
                {
                    newValue.quantity -= 1;
                     localStorage.setItem("cartitems",JSON.stringify(state))
                }
                else{
                     const newState = state.filter((item) => String(item.id) !== String(action.payload.id))
                     localStorage.setItem("cartitems",JSON.stringify(newState))
                        return newState;
                         
                }
                
            },
            addalltoCart:(state,action) =>
            {
                action.payload.forEach((product) =>
                {
                    const exsit = state.find((item) => String(item.id) === String(product.id));
                    if(exsit)
                    {
                        exsit.quantity += 1;
                    }
                    else{
                        state.push({
                            ...product,
                            quantity:1
                        })
                    }
                })
                 localStorage.setItem("cartitems",JSON.stringify(state))
            }

    }
})
export const {AddCart,DeleteCart,Clear,icreament,decrement,addalltoCart} = Cart.actions;
export default Cart.reducer;