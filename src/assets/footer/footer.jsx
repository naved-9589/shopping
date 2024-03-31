import React from 'react'
import { useLocation } from 'react-router-dom';

import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {

  // const location = useLocation();
  // if (location.pathname == "/checkout" || location.pathname == "/register" || location.pathname == "/login" || location.pathname == "/cart") {
  //   return <></>
  // }

  return (
    <div className="footer py-10">
      <div className="innerfooter">
        <div className="topfooter flex justify-center  border-b-2 pb-8">
          <img src='images/logo.png' />
        </div>
        <div className="middlefooter  md:px-20 px-4">
          <div className="inner flex flex-wrap pt-10">
            <div className="md:w-1/4 w-full mt-8">
              <div>
                <h4 className="font-bold text-2xl">Contact Info</h4>
                <div className="w-10 bg-red-400 h-[2px] mt-5"></div>
              </div>
              <div className="mt-6 mb-10">
                <p>Street 238,52 tempor<br /> Donec ultricies mattis nulla.</p>
              </div>
              <div>
                <p className="mt-4">Phone:<span className="ms-4">1.800.555.6789</span></p>
                <p className="mt-4">Email:<span className="ms-4">info@sktthemes.org</span></p>
                <p className="mt-4">Website:<span className="ms-4">https://sktthemes.org</span></p>
                <p className="mt-4">Blog:<span className="ms-4">https://theme.org</span></p>
              </div>
            </div>
            <div className="md:w-1/4 w-full mt-8">
              <div>
                <h4 className="font-bold text-2xl">My Account</h4>
                <div className="w-10 bg-red-400 h-[2px] mt-5"></div>
              </div>
              <div className="mt-6">
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>My account</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Cart</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Checkout</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Shop</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Wishlist</span></p>
              </div>
            </div>
            <div className="md:w-1/4 w-full mt-8">
              <div>
                <h4 className="font-bold text-2xl">Our Information</h4>
                <div className="w-10 bg-red-400 h-[2px] mt-5"></div>
              </div>
              <div className="mt-6">
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>About Us</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Services</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Pricing</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Get a Quote</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Privacy Policy</span></p>
              </div>
            </div>
            <div className="md:w-1/4 w-full mt-8">
              <div>
                <h4 className="font-bold text-2xl">Customer Services</h4>
                <div className="w-10 bg-red-400 h-[2px] mt-5"></div>
              </div>
              <div className="mt-6">
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Contact Us</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Shipping Policy</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Return Policy</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Refund Policy</span></p>
                <p className="mt-4 flex items-center"><span><MdKeyboardArrowRight /></span><span>Guarantee/Warranty</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
