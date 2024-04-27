import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import CraftItem from "../components/CraftItem/CraftItem";



const Home = () => {

    const craftItems = useLoaderData()


    return (
        <div className="mt-10">

            <Slider></Slider>

            <div>
                <div className="max-w-lg mx-auto" >
                    <h1 className="text-6xl text-center mt-16 mb-8 font-bold"> Crafts Items </h1>

                    <p className="max-w-lg text-center text-[16px] font-medium text-[#a2abad] ">  Warm your space with wooden accents like wall art, frames, and decor, marrying style with natural charm and sustainable elegance with woven jute rugs, wall hangings etc</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                    {
                        craftItems.map(craftItem => <CraftItem craftItem={craftItem} key={craftItem._id}></CraftItem>)
                    }
                </div>
            </div>

      
            
        </div>
    );
};

export default Home;