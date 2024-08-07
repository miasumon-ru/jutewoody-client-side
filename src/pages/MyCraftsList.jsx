import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


import Swal from 'sweetalert2'
import {Helmet} from "react-helmet";


const MyCraftsList = () => {
    const LoadedMyLists = useLoaderData()

    const [myLists, setMyLists] = useState(LoadedMyLists)
    const [customization, setCustomization] = useState(LoadedMyLists)
    const [all, setAll] = useState(LoadedMyLists)

    const [displayShow, setDisplayShow] = useState(LoadedMyLists)


    console.log(myLists)

    // handleDelete

    const handleDelete = (_id) => {

   
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://assignment-ten-server-side-peach.vercel.app/deleteCraftItem/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {

                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your CraftItem has been deleted.",
                                icon: "success"
                            });

                            const remaining = myLists.filter(list => list._id !== _id)

                            setMyLists(remaining)
                            setDisplayShow(remaining)

                        }



                    })



            }
        });



    }




    // handle Customization

    const handleYes = () => {

        const customized = customization.filter(list => list.customization === "Yes")

        setDisplayShow(customized)

    }
    // handle Customization

    const handleNo = () => {

        const customized = customization.filter(list => list.customization === "No")


        setDisplayShow(customized)

    }

    // handle All

    const handleBoth = () => {

        const allCrafts = all.filter(list => list.customization === "Yes" || "No")

        setDisplayShow(allCrafts)


    }

    return (
        <div>

            <div className="text-center my-10">

            <Helmet>
                <title> MyCraftList | JuteWoody </title>
            </Helmet>

                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1"> Customization </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">

                        <li className="btn mb-2" onClick={handleYes}> Yes </li>
                        <li className="btn mb-2" onClick={handleNo}> No </li>
                        <li className="btn" onClick={handleBoth}> Both </li>


                    </ul>
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8" >
                {
                    displayShow.map(list => <div key={list._id} className="card  bg-base-100 shadow-md">
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

                                <button onClick={() => handleDelete(list._id)} className="btn  w-full" > Delete </button>

                            </div>
                        </div>
                    </div>)
                }
            </div>



        </div>
    );
};

export default MyCraftsList;