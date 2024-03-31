import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchallproducts } from '../../redux/slices/productslice'
import { addcartitems } from '../../redux/slices/cartslice';


const Product = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchallproducts());
    }, [])


    const data = useSelector((state) => state.products)
    console.log(data)

    const loader = useSelector((state) => state.cart.status);


    const addtocart = (elem) => {
        dispatch(addcartitems(elem));
        console.log(elem);
    }



    return (
        <div className="product py-4 md:px-20 px-4 bg-slate-50 relative">

            {
                loader == "LOADING" ?
                    <div class="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                        <div class="flex items-center">
                            <span class="text-3xl mr-4">Loading</span>
                            <svg class="animate-spin h-8 w-8 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    : ""
            }

            <div className="innerproduct">
                <div className="topproduct text-center py-10">
                    <h4 className="font-semibold text-2xl">Top Collection</h4>
                </div>
                <div className="middleproduct">
                    <div className="inner">

                        <div className="flex flex-wrap">
                            <p className={data.length == 0 ? "block mx-auto font-light" : "hidden"}>No Data</p>
                            {
                                data.map((curr) => {
                                    return (
                                        <div className="md:w-1/4 w-1/2 group/item relative">
                                            <div className="relative py-4 mx-4">
                                                <div className="">
                                                    <div className="bg-red-400">
                                                        <img className="group-hover/item:opacity-20 duration-500" src={import.meta.env.VITE_URL + curr.image} />
                                                    </div>
                                                   
                                                    <div className="text-center mt-6">
                                                        <p>{curr.name}</p>
                                                        <div className="flex justify-center">
                                                            <p className={curr.saleprice !== null ? "me-2 line-through text-slate-400" : ""}>${curr.regularprice}</p>
                                                            <p className={curr.saleprice !== null ? "block" : "hidden"}>${curr.saleprice}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={curr.saleprice !== null ? "absolute top-0 right-0 bg-green-600 text-white rounded-[50%] p-2" : "hidden"}>Sale!</div>
                                            </div>
                                            <div className="ease-in-out opacity-0 duration-500 group/edit group-hover/item:opacity-100 group-hover/item:top-[40%] w-full text-center absolute top-0">
                                                <button onClick={() => { addtocart(curr) }} className="text-black bg-white rounded-full px-6 py-2">Add Cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>

            <div style={{ display: loader == "SUCCESS" ? "block" : "none" }} id="successModal" tabindex="-1" aria-hidden="true" className="translate-y-[-50%] translate-x-[-50%] overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] z-50 justify-center items-center  h-modal ">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:py-5 sm:px-10">
                        <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
                            <svg aria-hidden="true" className="w-8 h-8 text-red-400 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Success</span>
                        </div>
                        <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully Added</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Product
