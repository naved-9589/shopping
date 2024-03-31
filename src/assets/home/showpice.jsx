import React from 'react'
import Slider from "react-slick";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:text-black before:content-[">"]`}
            style={{ ...style, display: "block", background: "", color: "black", right: 10, zIndex: "100" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} before:text-black before:content-["<"]`}
            style={{ ...style, display: "block", background: "", color: "black", left: 10, zIndex: "100" }}
            onClick={onClick}
        />
    );
}


const Showpice = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="showpice  bg-neutral-50  ">
            <div className="innershowpice">
                <div className="flex flex-wrap py-10 md:px-20 px-4">
                    <div className="md:w-1/3 w-full">
                        <div className="p-4">
                            <div className="mb-4 shadow-lg">
                                <img src="images/sofa-img.jpg" />
                            </div>
                            <div className="shadow-lg">
                                <img src="images/belt-img.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full">
                        <div className="p-4">
                            <div>
                                <Slider {...settings}>
                                    <img className="shadow-lg" src="images/slider-img1.jpg" />
                                    <img className="shadow-lg" src="images/slider-img1.jpg" />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature py-10">
                    <div className="inner">
                        <div className="flex flex-wrap">
                            <div className="md:w-1/4 w-full bg-stone-100 p-8">
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="mb-4">
                                            <img src="images/feature-icon1.png" />
                                        </div>
                                        <p>Fast Delivery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/4 w-full bg-stone-200 p-8">
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div  className="mb-4">
                                            <img src="images/feature-icon2.png" />
                                        </div>
                                        <p>Special Discount</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/4 w-full bg-sky-50  p-8">
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div  className="mb-4">
                                            <img src="images/feature-icon3.png" />
                                        </div>
                                        <p>Secure Checkout</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/4 w-full bg-slate-200  p-8">
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div  className="mb-4">
                                            <img src="images/feature-icon4.png" />
                                        </div>
                                        <p>Money Returns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showpice
