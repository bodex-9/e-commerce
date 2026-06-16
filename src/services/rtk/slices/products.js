import axios from "axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk('products/getproducts', async(page) =>
{
    const data = await axios.get(`https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`);
    return data.data;
})

export const getProductsbyCategory = createAsyncThunk('products/getProductsbyCategory', async(category) =>
{
    const data = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return data.data;
})

export const Products = createSlice({
    initialState:{
        data:[],
        total:0,
        loading:false,
        error:null
    },
    name:'products',

    reducers:{},

    extraReducers:(bulider) => 
    {
        bulider.addCase(getProducts.pending,(state,action) => 
        {
            state.loading = true;
        })
        bulider.addCase(getProducts.fulfilled,(state,action) => 
        {
            state.data = action.payload.products;
            state.total = action.payload.total;
            state.loading = false;
        })
        bulider.addCase(getProducts.rejected,(state,action) => 
        {
            state.loading = false;
            state.error = action.error.message;
        })


        bulider.addCase(getProductsbyCategory.pending,(state,action) => 
        {
            state.loading = true;
        })
        bulider.addCase(getProductsbyCategory.fulfilled,(state,action) => 
        {
            state.data = action.payload.products;
            state.loading = false;
        })
        bulider.addCase(getProductsbyCategory.rejected,(state,action) => 
        {
            state.loading = false;
            state.error = action.error.message;
        })
    }

})
export default Products.reducer;