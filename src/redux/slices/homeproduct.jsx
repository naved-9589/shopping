import { createSlice } from '@reduxjs/toolkit'

const homeproductslice = createSlice({
    name: "homeproduct",
    initialState: {
        uploadstatus: "IDLE",
        status: "IDLE",
        data: [],
    },
    reducers:{
        changestatus(state, action){
           state.status = action.payload;
           console.log(action.payload)
        },
        setupcomingproduct(state, action){
            state.data = action.payload
            console.log(state.data)
        },
        updatechangestatus(state, action){
             state.uploadstatus = action.payload;
        }
    }
})

export function homeproductfetch (){
    return async function homeproductfetchthunk(dispatch, getstate){
         try {
            
            const resp = await fetch(`${import.meta.env.VITE_URL}upcomingproduct`);
            
            const data = await resp.json();
            dispatch(setupcomingproduct(data));
            console.log(data);

         } catch (error) {
            console.log(error);
         }
    }
}

export const {changestatus, setupcomingproduct, updatechangestatus} = homeproductslice.actions;
export default homeproductslice.reducer;