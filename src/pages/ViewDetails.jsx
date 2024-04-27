import { useLoaderData } from "react-router-dom";



const ViewDetails = () => {

    const craftItem = useLoaderData()

    const { photoURL, itemName, subCategoryName, shortDescription, price, rating, customization, processingTime, stockStatus } = craftItem

    return (
        <div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 md:my-8 lg:my-12">
                <div className="col-span-4 flex justify-center items-center  w-full p-5">

                    <img className="rounded-xl" src={photoURL} alt="CraftsImage" />

                </div>
                <div className="col-span-3 p-5">


                    <h1 className="text-3xl lg:text-4xl font-bold"> {subCategoryName} </h1>

                    <div>
                        <h2 className="text-2xl mt-10 mb-4  font-bold"> {itemName} </h2>
                        <p className="text-[#a2abad] text-[16px]" > <span className="font-extrabold">Short Description </span>:  {shortDescription} </p>
                    </div>

                    <div className="space-y-2 mt-6">

                        <p className="text-[18px] font-bold text-[#6b645d]"> Price :  {price} </p>
   
                        <div className="border border-gray-200"></div>

                        <p className="text-[18px] font-bold text-[#6b645d]"> Ratings :  {rating} </p>

                        <div className="border border-gray-200"></div>

                        <p className="text-[18px] font-bold text-[#6b645d]"> Customization :  {customization} </p>

                        <div className="border border-gray-200"></div>

                        <p className="text-[18px] font-bold text-[#6b645d] "> Stock Status :  {stockStatus} </p>



                        <div className="border border-gray-200"></div>





                        <p className="text-[18px] font-bold text-[#6b645d]"> Processing Time :  {processingTime} </p>




                    </div>



                </div>

            </div>

        </div>
    );
};

export default ViewDetails;