import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Upcoming from './upcoming';
import Showpice from './showpice';


const Home = () => {



  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  return (
    <div className="home ">
      <div className="innerhome">
        <div className="absolute md:block hidden left-0 right-0 bg-white mx-auto top-[-60px] h-20 w-[90%] z-10 rounded-[80px] after:content-[''] after:w-8 after:h-8 after:absolute after:top-[50px] after:right-0 after:left-0 after:z-10 after:bg-white after:m-auto after:origin-center after:rotate-45"></div>
        <div className="tophome relative">
          <Slider {...settings}>
            <div>
              <img src="/images/slider1.jpg" />
            </div>
            <div>
              <img src="/images/slider2.jpg"/>
            </div>
          </Slider>
          <div className="absolute top-[50%] md:left-[27%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[auto]  w-[90%]">
            <div className="md:w-[500px]">
              <h4 className="text-red-400 text-2xl font-bold ">Get ready</h4>
              <h5 className=" text-4xl font-extrabold md:mt-4 md:mb-6 mt-2 mb-4">Stylish Chair</h5>
              <p>Vestibulum rutrum, ligula non faucibus fringilla, sem erat feugiat sapiena rhoncus. sem erat feugiat sapiena rhoncus</p>
            </div>
          </div>
        </div>
        <Upcoming/>
        <Showpice/>
      </div>
    </div>
  )
}

export default Home
