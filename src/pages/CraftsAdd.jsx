import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../providers/AuthProvider";

import {Helmet} from "react-helmet";


import Swal from 'sweetalert2'


// image links

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

const CraftsAdd = () => {

    // from AuthProvider

    const {user, loading, setLoading} = useContext(AuthContext)


    const userEmail = user?.email
    const userName = user?.displayName || user?.reloadUserInfo?.providerUserInfo[0]?.screenName

    console.log(userEmail, userName)
    // from react hook form

    const {
        register,
        handleSubmit

    } = useForm()

    if(loading) {
        
        return <span className="loading loading-spinner loading-lg"></span>
    }


    // handleAdd Craft

    const handleAddCraft = (data) => {


        const  {photoURL, itemName, subCategoryName, shortDescription, price, rating, customization, processingTime, stockStatus  } = data 


        const newCraftItem = {photoURL, itemName, subCategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userEmail, userName }

        console.log(newCraftItem)

        // fetch the addCratItem Api

        fetch("https://assignment-ten-server-side-peach.vercel.app/addCraftItem", {
            method: "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(newCraftItem)
        })
        .then(res => res.json())
        .then(data => {
     
            if(data.insertedId){

                setLoading(false)
                Swal.fire({
                    title: 'Success !!',
                    text: 'Successfully Added The Craft',
                    icon: 'success',
                    confirmButtonText: 'Close'
                  })
            
            }
        })

    }


 



    return (

        <div className="">

            <Helmet>
                <title> CraftAdd | JuteWoody </title>
            </Helmet>

            <div className="flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center my-10"> Add Craft Item </h1>

                </div>
                <div className="card shrink-0 w-full  border bg-base-100">
                    <form onSubmit={handleSubmit(handleAddCraft)} className="card-body font-bold">




                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text"> Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered w-full" required />
                        </div>

                        <div className="md:flex md:flex-row gap-4 w-full " >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text"  {...register("itemName")} placeholder="Item Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> SubCategory Name </span>
                                </label>
                                <select className="border p-4 rounded-sm w-full " {...register("subCategoryName")}>
                                    <option value="Wooden Furniture & Sculptures">Wooden Furniture & Sculptures</option>
                                    <option value="Wooden Home Decor">Wooden Home Decor</option>
                                    <option value="Wooden Utensils and Kitchenware">Wooden Utensils and Kitchenware</option>
                                    <option value="Jute Home Decor">Jute Home Decor</option>
                                    <option value="Jute Kitchenware & utensils">Jute Kitchenware & utensils </option>
                                    <option value="Jute and wooden jwellery">Jute and wooden jwellery</option>
                                </select>

                            </div>
                        </div>


                        <div className="md:flex md:flex-row gap-4 w-full " >

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Short Description</span>
                                </label>
                                <input type="text"  {...register("shortDescription")} placeholder="Short Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text"  {...register("price")} placeholder="Price" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="md:flex md:flex-row gap-4 w-full " >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input type="text"  {...register("rating")} placeholder="Rating" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Customization </span>
                                </label>
                                <select className="border p-4 rounded-sm  " {...register("customization")}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                            </div>
                        </div>


                        <div className="md:flex md:flex-row gap-4 w-full ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="text"  {...register("processingTime")} placeholder="Processing Time" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text"  {...register("stockStatus")} placeholder="Stock Status" className="input input-bordered" required />
                            </div>
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn bg-[#565264] hover:bg-[#393644] text-white  ">Add Craft Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CraftsAdd;