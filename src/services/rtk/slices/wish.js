import { createSlice } from "@reduxjs/toolkit";
const savedItem = localStorage.getItem("wishitems");
const initialState = savedItem ? JSON.parse(savedItem) : [];
export const Wishlist = createSlice({
    initialState,
    name:'wish',
    reducers:{
            addwish:(state,action) => 
            {
                 const findItem = state.find((item) => String(item.id) === String(action.payload.id));
                if (findItem)
                {
                    findItem.quantity += 1;
                }
                else{
                    const productClone = {...action.payload,quantity:1}
                    state.push(productClone);
                }
                localStorage.setItem("wishitems" ,JSON.stringify(state))
            },
                   Deletewish:(state,action)=>{
                        const newState = state.filter((item) => String(item.id) !== String(action.payload.id))
                         localStorage.setItem("wishitems",JSON.stringify(newState))
                        return newState;
            },
            Clear:(state,action) =>
            {
                 localStorage.removeItem("wishitems")
                    return[];
            }
            }
    }
)
export const {addwish,Deletewish,Clear} = Wishlist.actions;
export default Wishlist.reducer;