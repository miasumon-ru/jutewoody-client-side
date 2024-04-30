import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom";

import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";

const UpdatePage = () => {

    // from react hook form

    const {
        register,
        handleSubmit

    } = useForm()

    // Loading Data for Updating

    const craftItem = useLoaderData()
    console.log(craftItem)

    const _id = craftItem._id

    // handle Update Craft

    const handleUpdate = (data) => {


        const { photoURL, itemName, price, rating, customization, stockStatus, subCategoryName, shortDescription, processingTime } = data


        const newCraftItem = { photoURL, itemName, price, rating, customization, stockStatus, _id, subCategoryName, shortDescription, processingTime }

        console.log(newCraftItem)

        // fetch the addCraftItem Api

        fetch("https://assignment-ten-server-side-peach.vercel.app/updatePage", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCraftItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    Swal.fire({
                        title: 'Success !!',
                        text: 'The Craft has been Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })

                }
            })


    }


    return (
        <div className="">

            <Helmet>
                <title> UpdatePage | JuteWoody </title>
            </Helmet>




            <div className="flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center my-10"> Update Craft Item </h1>

                </div>
                <div className="card shrink-0 w-full  border bg-base-100">
                    <form onSubmit={handleSubmit(handleUpdate)} className="card-body font-bold">




                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text"> Photo URL</span>
                            </label>
                            <input defaultValue={craftItem.photoURL} type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered w-full" required />
                        </div>

                        <div className="md:flex md:flex-row gap-4 w-full " >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input defaultValue={craftItem.itemName} type="text"  {...register("itemName")} placeholder="Item Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> SubCategory Name </span>
                                </label>
                                <select defaultValue={craftItem.subCategoryName} className="border p-4 rounded-sm w-full " {...register("subCategoryName")}>
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
                                <input defaultValue={craftItem.shortDescription} type="text"  {...register("shortDescription")} placeholder="Short Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input defaultValue={craftItem.price} type="text"  {...register("price")} placeholder="Price" className="input input-bordered" required />
                            </div>
                        </div>


                        <div className="md:flex md:flex-row gap-4 w-full " >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Ratings</span>
                                </label>
                                <input defaultValue={craftItem.rating} type="text"  {...register("rating")} placeholder="Rating" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"> Customization </span>
                                </label>
                                <select defaultValue={craftItem.customization} className="border p-4 rounded-sm  " {...register("customization")}>
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
                                <input defaultValue={craftItem.processingTime} type="text"  {...register("processingTime")} placeholder="Processing Time" className="input input-bordered" required />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input defaultValue={craftItem.stockStatus} type="text"  {...register("stockStatus")} placeholder="Stock Status" className="input input-bordered" required />
                            </div>
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Craft Item</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;