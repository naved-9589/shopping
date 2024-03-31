import React from 'react'

const About = () => {
  return (
    <div className="about">
        <div className="innerabout">
            <div className="abouthero md:block hidden">
                <img src="/images/default-header-img.jpg"/>
            </div>
            <div className="middleabout">
                <div className="innermiddle py-[20px] md:py-[80px] md:px-20 px-4 bg-slate-100">
                    <div className="flex flex-wrap">
                        <div className="md:w-2/4 md:p-8 w-full">
                            <h5 className="text-red-400 font-semibold mb-2">WHO WE ARE</h5>
                            <div>
                                <h4 className="font-bold text-4xl mb-4">About Us</h4>
                            </div>
                            <div className="w-24 h-[2px] bg-red-400 my-8"></div>
                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum volutpat in arcu non rutr. Aliquam eros nulla. Sed vel dolor quis urna pellentesque porta eget eu nunic. Praesent tempor bibendum urna, ut congue augue malesuada quisay. Nullam lectus nulla, scelerisque ac eleifend nec.</p>
                        </div>
                        <div className="md:w-2/4 w-full">
                            <img src="images/about-img.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
