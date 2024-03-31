import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deletecartitems, fetchcartproducts } from '../../redux/slices/cartslice';




const Cart = () => {

    const cartitems = useSelector((state) => state.cart.cartdata);
    console.log(cartitems);

    const totalamount = useSelector((state) => state.cart.totalAmount);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const deletecart = (id) => {
        dispatch(deletecartitems(id))
    }

    const checkout = async()=>{
        try {
            
            const resp = await fetch(`${import.meta.env.VITE_URL}create-checkout-session`,{
                method: "POST",
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token")
                },
                mode: "cors",
                body: JSON.stringify({
                    items: cartitems
                })
            })

            const data = await resp.json();
            if(data.name == "JsonWebTokenError" || data.name == "TokenExpiredError"){
                   return navigate("/login")
            }
            console.log(data.url)
            window.location=data.url;

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dispatch(fetchcartproducts());
    }, [])

    return (
        <div className="cart">
            <div className="innercart">
                <div className="carthero md:block hidden">
                    <img src="/images/default-header-img.jpg" />
                </div>
                <div className="middlecart md:px-20 px-4 py-10 bg-slate-50">
                    <div class="pt-5">
                        <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                            <div class="rounded-lg md:w-2/3">
                                <div className={cartitems.length == 0 ? "block text-center text-red-400" : "hidden"}>No Items In Your Cart</div>
                                {
                                    cartitems.map((curr) => {
                                        return (
                                            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                                <img src={import.meta.env.VITE_URL + curr.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                    <div class="mt-5 sm:mt-0">
                                                        <h2 class="text-lg font-bold text-gray-900">{curr.name}</h2>

                                                    </div>
                                                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                        <div class="flex items-center border-gray-100 justify-end">
                                                            {/* <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span> */}
                                                            <p className="mx-2">{curr.quantity}</p>
                                                            {/* <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span> */}
                                                        </div>
                                                        <div class="flex items-center space-x-4">
                                                            <p class="text-sm">${curr.saleprice == null ? curr.regularprice : curr.saleprice}</p>
                                                            <button onClick={() => { deletecart(curr._id) }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>

                            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                                <div class="mb-2 flex justify-between">
                                    <p class="text-gray-700">Subtotal</p>
                                    <p class="text-gray-700">${totalamount}</p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-gray-700">Shipping</p>
                                    <p class="text-gray-700">$0</p>
                                </div>
                                <hr class="my-4" />
                                <div class="flex justify-between">
                                    <p class="text-lg font-bold">Total</p>
                                    <div class="">
                                        <p class="mb-1 text-lg font-bold">${totalamount} USD</p>
                                        <p class="text-sm text-gray-700">including VAT</p>
                                    </div>
                                </div>
                                {/* <button onClick={checkout} class="mt-6 w-full rounded-md bg-red-400 py-1.5 font-medium text-blue-50 hover:bg-red-500">Checkout</button> */}
                                <button class="mt-6 w-full rounded-md bg-red-400 py-1.5 font-medium text-blue-50 hover:bg-red-500"><Link to="/checkouts" >Checkout</Link> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
