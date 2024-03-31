import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';


const Header = (prop) => {
   console.log(prop.cartitems.length)
    const [mobileview, setmobileview] = useState(false);
 
    const cartitems = useSelector((state) => state.cart.cartdata);

    const showmobilemenu = () => {
        setmobileview(!mobileview);
    }

    const location = useLocation();
    // console.log(location.pathname);
    // if(location.pathname == "/checkout" || location.pathname == "/register"){
    //     return <></>
    // }

    return (
        <div className={location.pathname == "/" ? "header md:absolute md:py-10  py-4 w-full md:px-20 px-4 z-10" : "header py-4 w-full md:px-20 px-4 z-10"}>
            <div className="innerheader">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="images/logo.png" />
                    </div>
                    <div className="hidden md:flex">
                        <div>
                            <ul>
                                <li className="inline-block mx-4"><Link to="/">Home</Link></li>
                                <li className="inline-block mx-4"><Link to="/products">Products</Link></li>
                                <li className="inline-block mx-4"><Link to="/about">About Us</Link></li>
                                <li className="inline-block mx-4"><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <p><Link className="text-red-400" to="/cart"><FaCartShopping/></Link></p>
                            <span className="mt-[-20px] h-5 w-5 bg-red-400 rounded-[50%] flex justify-center items-center text-sm text-white">{cartitems.length}</span>
                        </div>
                    </div>
                    <div className="block ml-auto mr-2 md:hidden">
                        <div className="flex items-center">
                            <p><Link className="text-red-400" to="/cart"><FaCartShopping/></Link></p>
                            <span className="mt-[-20px] h-5 w-5 bg-red-400 rounded-[50%] flex justify-center items-center text-sm text-white">{cartitems.length}</span>
                        </div>
                    </div>
                    <div className="md:hidden text-center">
                        <p onClick={showmobilemenu} style={{ background: mobileview ? "#d5d0d024" : "" }} className="text-2xl h-10 w-10 rounded">&#8801;</p>
                    </div>
                </div>
                <div className={mobileview == true ? "block md:hidden text-center absolute w-full left-0 right-0 top-[69px] z-10 bg-white py-4" : "hidden md:hidden"}>
                    <ul>
                        <li onClick={showmobilemenu} className="py-2 "><Link to="/">Home</Link></li>
                        <li onClick={showmobilemenu} className="py-2"><Link to="/products">Products</Link></li>
                        <li onClick={showmobilemenu} className="py-2"><Link to="/about">About Us</Link></li>
                        <li onClick={showmobilemenu} className="py-2"><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
