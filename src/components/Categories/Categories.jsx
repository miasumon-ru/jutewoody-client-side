/**
 * 
 * https://i.postimg.cc/1XP9SP8k/wood-desk.jpg
 * https://i.postimg.cc/tCYcgwFw/wood-necklace.jpg
 * https://i.postimg.cc/C5Ws5Pgp/wood-spoon.jpg
 * https://i.postimg.cc/z3ZT8yCJ/jute-hangings.jpg
 * https://i.postimg.cc/05JWRDx1/jute-bags.jpg
 * https://i.postimg.cc/15hW9X5n/jute-earrings.jpg
 * 
 */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Categories = () => {


    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])



    return (
        <div>
          

            <div className="max-w-lg mx-auto mb-10" >
                <h1 className="text-4xl text-center mt-16 mb-8 font-bold"> Art & Craft Categories </h1>

                <p className="max-w-lg text-center text-[16px] font-medium text-[#a2abad] ">   Explore a diverse array of handmade wonders crafted from natural jute fibers and wood.  </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                {
                    categories.map(category => <Link to={`/subCategoryNameAll/${category.subCategoryName}`} key={category._id}>


                        <div className="rounded-lg shadow-md flex flex-col justify-center items-center p-10"  >


                            <img className="w-44 h-32 rounded-lg" src={category.photoURL} alt="" />

                            <p className="text-center mt-6 font-bold text-[16px]"> {category.subCategoryName} </p>


                        </div>


                    </Link>)
                }

            </div>
        </div>
    );
};

export default Categories;