import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice({
    name: "product",
    initialState:{
        cartdata: JSON.parse(localStorage.getItem("items")) || [],
        status: "IDLE",
        totalAmount: 0
    },
    reducers:{
        setcartlocal(state, action){
            const newItem = action.payload;
            const existingItem = state.cartdata.find(item => item._id === newItem._id);
            if (existingItem) {
                // If the item already exists in the cart, update its quantity
                existingItem.quantity += newItem.quantity;
            } else {
                // If the item is not in the cart, push it to the cartdata array
                state.cartdata.push(newItem);
            }
            // Update localStorage with the updated cart data
            localStorage.setItem("items", JSON.stringify(state.cartdata));
            state.totalAmount = calculateTotalAmount(state.cartdata);
            console.log(state.totalAmount);
        },
        setcartlogin(state, action){
                  state.cartdata = action.payload
                  state.totalAmount = calculateTotalAmount(state.cartdata);
                  console.log(state.totalAmount);
                  console.log(state.cartdata);
        },
        deletecartlocal(state, action){
            const itemIdToDelete = action.payload;
            state.cartdata = state.cartdata.filter(item => item._id !== itemIdToDelete);
            // Update localStorage with the updated cart data after deletion
            localStorage.setItem("items", JSON.stringify(state.cartdata));
            state.totalAmount = calculateTotalAmount(state.cartdata);
                  console.log(state.totalAmount);
        },
        deletecartlogin(state, action){
            state.cartdata = action.payload
            state.totalAmount = calculateTotalAmount(state.cartdata);
                  console.log(state.totalAmount);
                  console.log(state.cartdata);
        },
        findproductstotal(state, action){
            state.totalAmount = calculateTotalAmount(state.cartdata);
            console.log(state.totalAmount);
        },
        setloading(state, action){
            state.status = action.payload;
        }
    }
})

const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => {
        const price = item.saleprice !== null ? item.saleprice : item.regularprice;
        return total + (item.quantity * price);
    }, 0);
};
// export const selectTotalAmount = state => state.product.totalAmount;

export function addcartitems(elem){
    return async function addcartitemsthun(dispatch, getstate){
        try {
            dispatch(setloading("LOADING"))
            console.log(elem);
            const resp = await fetch(`${import.meta.env.VITE_URL}addcart`,{
                method: "POST",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
                body: JSON.stringify({productid: elem._id, name: elem.name, image: elem.image, regularprice: elem.regularprice, saleprice: elem.saleprice, quantity: 1})
            });
            const data = await resp.json();

            const gettingstate = getstate();
            

            if(data.name == "JsonWebTokenError" || data.name == "TokenExpiredError"){
               
                
               
               let newitem = {
                name: elem.name,
                regularprice: elem.regularprice,
                saleprice: elem.saleprice,
                image: elem.image,
                _id: elem._id,
                quantity: 1
            }

        


            
            dispatch(setcartlocal(newitem))
            dispatch(setloading("SUCCESS"))
            setTimeout(() => {
            dispatch(setloading("IDLE"))
            }, 1000);
            
            console.log(gettingstate.cart.cartdata)
            console.log(localStorage.getItem("items"))
                 console.log("error are coming from response")
            }else{
                console.log("good response coming from response")
                dispatch(setcartlogin(data));
                dispatch(setloading("SUCCESS"))
                setTimeout(() => {
                    dispatch(setloading("IDLE"))
                    }, 1000);
                    
                console.log(gettingstate.cart);
            }
        
           
            
            

        } catch (error) {
            console.log(error);
        }
    }
}

export function deletecartitems (id){
    return async function deletecartitemsthunk(dispatch, getstate){
        try {

            const resp = await fetch(`${import.meta.env.VITE_URL}deletecart`,{
                method: "DELETE",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
                body: JSON.stringify({id: id})
            });
            const data = await resp.json();

             console.log(data)
            if(data.name == "JsonWebTokenError"  || data.name == "TokenExpiredError"){
               
               dispatch(deletecartlocal(id));
              
             }else{
                dispatch(deletecartlogin(data));
             }

        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchcartproducts (){
    return async function fetchcartproductsthunk(dispatch, getstate){
        try {
            console.log("call")
            const resp = await fetch(`${import.meta.env.VITE_URL}fetchcart`,{
            
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "token": localStorage.getItem("token")
                },
            })
            const data = await resp.json();
            console.log(data)
            dispatch(findproductstotal());
            if(data.name !== "JsonWebTokenError"){
                
                if(data.name !== "TokenExpiredError"){
                    dispatch(setcartlogin(data));
                }
             
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const {setcartlocal, setcartlogin, deletecartlocal, deletecartlogin, findproductstotal, setloading} = cartslice.actions;
export default cartslice.reducer;