import { createSlice } from "@reduxjs/toolkit";


const productslice = createSlice({
    name: "product",
    initialState:[],
    reducers:{
        setproduct(state, action){
           return state = action.payload;
        },
    }
})

export function fetchallproducts(){
    return async function fetchallproductsthunk(dispatch, getstate){
        try {
            
            const resp = await fetch(`${import.meta.env.VITE_URL}fetchproducts`);
            const data = await resp.json();
 
            dispatch(setproduct(data));
            console.log(data)

        } catch (error) {
            console.log(error);
        }
    }
}




export const {setproduct} = productslice.actions;
export default productslice.reducer;