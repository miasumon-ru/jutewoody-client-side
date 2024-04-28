import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

 
 const MyCraftsList = () => {
    const LoadedMyLists = useLoaderData()

    const [myLists, setMyLists] = useState(LoadedMyLists)

    console.log(myLists)

    // handleDelete

    const handleDelete = (_id) => {

        console.log("delete this id", _id)

        fetch(`http://localhost:5000/deleteCraftItem/${_id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const remaining = myLists.filter(list => list._id !== _id)
            setMyLists(remaining)
        } )

    }
    return (
        <div>
   

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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

                            <Link className="w-full" to={`/updatePage/${list._id}`} > <button className="btn  w-full" > Update </button> </Link>

                             <button onClick={()=> handleDelete(list._id)} className="btn  w-full" > Delete </button> 
         
                        </div>
                    </div>
                </div>)
                }
            </div>
            

            
        </div>
    );
 };
 
 export default MyCraftsList;