import React, { useEffect } from 'react'
import { homeproductfetch } from '../../redux/slices/homeproduct'
import { useDispatch, useSelector } from 'react-redux'

const Upcoming = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => state.homeupcoming.data);
    console.log(data.length)

    useEffect(() => {
        dispatch(homeproductfetch());
    }, [])

    return (
        <div className="upcoming md:py-[80px] py-8 md:mx-20 px-4 relative z-10  md:mt-[-50px] mt-[-20px] rounded-[50px] bg-[url('images/section1-bg.jpg')] bg-cover bg-no-repeat">
            <div className="innerupcoming">
                <div className="text-center max-w-[550px] m-auto mb-8">
                    <h2 className="md:text-4xl text-2xl  font-semibold mb-4">Upcoming Collection</h2>
                    <p>Vestibulum rutrum, ligula non faucibus fringilla, sem erat feugiat sapiena rhoncus ex mi vel turpis nibh placerat fermentum.</p>
                </div>
                <div className="upcominglist">
                    <div className="flex flex-wrap">
                        <p className={data.length == 0 ? "block mx-auto font-light": "hidden"}>No Data</p>
                        {
                            data.map((curr) => {
                 
                                return (
                                   
                                    <div className="md:w-1/3">
                                        <div className="p-4">
                                            <img src={import.meta.env.VITE_URL+curr.image} />
                                            <div className="text-center mt-6">
                                                <p>{curr.name}</p>
                                                <p>${curr.regularprice}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
