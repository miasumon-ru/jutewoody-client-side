import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SubCategoryNameAll = () => {

    const [subCategoryNames, setSubCategoryNames] = useState([])

    const { subCategoryName } = useParams()

    useEffect(() => {

        fetch(`https://assignment-ten-server-side-peach.vercel.app/subCategoryNameAll/${subCategoryName}`)
            .then(res => res.json())
            .then(data => setSubCategoryNames(data))

    }, [subCategoryName])

  
    return (
        <div>

          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10" >

                {
                    subCategoryNames.map(subCategoryName => <div key={subCategoryName._id} className="card  bg-base-100 shadow-md">
                        <figure><img src={subCategoryName.photoURL} alt="CraftItems image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-6"> {subCategoryName.subCategoryName} </h2>
                            <h2 className="card-title text-xl mb-2"> {subCategoryName.itemName} </h2>
                            <p className=" text-[18px] font-bold text-[#6b645d] mb-8"> {subCategoryName.shortDescription} </p>

                            <p className="text-[18px] font-bold text-[#6b645d] " > Price :  {subCategoryName.price} </p>

                            <div className="border border-gray-200"></div>

                            <p className="text-[18px] font-bold text-[#6b645d] " > Ratings :  {subCategoryName.rating} </p>

                            <div className="border border-gray-200"></div>

                            <p className="text-[18px] font-bold text-[#6b645d] " > Processing Time :  {subCategoryName.processingTime} </p>


                            {/* <div className="border border-gray-200"></div> */}




                            <div className="card-actions mt-4 flex flex-col w-full ">

                                <Link className="w-full" to={`/viewDetails/${subCategoryName._id}`} > <button className="btn  w-full" > ViewDetails </button> </Link>



                            </div>
                        </div>
                    </div>)
                }
            </div>



        </div>
    );
};

export default SubCategoryNameAll;