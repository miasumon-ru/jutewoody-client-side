import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom";


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


        const { photoURL, itemName, price, rating, customization, stockStatus } = data


        const newCraftItem = { photoURL, itemName, price, rating, customization, stockStatus, _id }

        console.log(newCraftItem)

        // fetch the addCraftItem Api

        fetch("http://localhost:5000/updatePage", {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCraftItem)
        })
        .then(res => res.json())
        .then(data => console.log(data))
          

    }


    return (
        <div className="">
            <div className="flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center my-10"> Update Craft Item </h1>

                </div>
                <div className="card shrink-0 w-full  border bg-base-100">
                    <form onSubmit={handleSubmit(handleUpdate)} className="card-body font-bold">


                        <div className="md:flex md:flex-row gap-4 w-full ">
                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text"> Photo URL</span>
                                </label>
                                <input defaultValue={craftItem.photoURL} type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered w-full" required />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input defaultValue={craftItem.stockStatus} type="text"  {...register("stockStatus")} placeholder="Stock Status" className="input input-bordered" required />
                            </div>
                        </div>



                        <div className="md:flex md:flex-row gap-4 w-full " >
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input defaultValue={craftItem.itemName} type="text"  {...register("itemName")} placeholder="Item Name" className="input input-bordered" required />
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