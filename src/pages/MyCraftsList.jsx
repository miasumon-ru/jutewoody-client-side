import { Link, useLoaderData } from "react-router-dom";

 
 const MyCraftsList = () => {
    const myLists = useLoaderData()

    console.log(myLists)
    return (
        <div>

            <div className="max-w-96 mx-auto">
                <h1 className="text-4xl">My Craft Lists </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    myLists.map(list =><div key={list._id} className="card  bg-base-100 shadow-md">
                    <figure><img src={list.photoURL} alt="CraftItems image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-6"> {list.itemName} </h2>
                   
                        <p className="text-[18px] font-bold text-[#6b645d] " > Price :  {list.price} </p>

                        <div className="border border-gray-200"></div>

                        <p className="text-[18px] font-bold text-[#6b645d] " > Ratings :  {list.rating} </p>
                    
                        <div className="border border-gray-200"></div>   

                         <p className="text-[18px] font-bold text-[#6b645d] " > Customization :  {list.customization} </p>

                         <div className="border border-gray-200"></div>   

                         <p className="text-[18px] font-bold text-[#6b645d] mb-4" > Stock Status :  {list.stockStatus} </p>
                       
                        {/* <div className="border border-gray-200"></div> */}



                      
                        <div className="card-actions mt-4 flex flex-col w-full ">

                            <Link className="w-full" > <button className="btn  w-full" > Update </button> </Link>

                            <Link className="w-full"> <button className="btn  w-full" > Delete </button> </Link>
         
                        </div>
                    </div>
                </div>)
                }
            </div>
            

            
        </div>
    );
 };
 
 export default MyCraftsList;