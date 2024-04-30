import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import CraftItem from "../components/CraftItem/CraftItem";
import Testimonial from "../components/Testimonial/Testimonial";
import Accordion from "../components/Accordion/Accordion";
import Categories from "../components/Categories/Categories";
import { Helmet } from "react-helmet";

import { Zoom } from "react-awesome-reveal";






const Home = () => {

    const craftItems = useLoaderData()






    return (
        <div className="mt-10">

            <Helmet>
                <title> Home | JuteWoody </title>
            </Helmet>

            <Slider></Slider>

            {/* Crafts Item Section */}

            <div>
                <div className="max-w-lg mx-auto" >
                    <h1 className="text-6xl text-center mt-16 mb-8 font-bold">

                        <Zoom>

                        Crafts Items 

                        </Zoom>

                        
                    </h1>

                    <p className="max-w-lg text-center text-[16px] font-medium text-[#a2abad] ">  Warm your space with wooden accents like wall art, frames, and decor, marrying style with natural charm and sustainable elegance with woven jute rugs, wall hangings etc</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        craftItems.slice(0, 6).map(craftItem =>
                            
                            <CraftItem craftItem={craftItem} key={craftItem._id}></CraftItem> )
                    }
                </div>
            </div>

            {/* Categories Section */}

            <div>
                <Categories></Categories>
            </div>


            {/* Testimonial Section */}

            <div>
                <Testimonial></Testimonial>
            </div>


            {/* Frequently Asked Questions */}

            <div>
                <Accordion></Accordion>
            </div>







        </div>
    );
};

export default Home;