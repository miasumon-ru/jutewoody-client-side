import { Link, useLoaderData } from "react-router-dom";

import { Helmet } from "react-helmet";



const CraftsAll = () => {

    const craftsAll = useLoaderData()
    console.log(craftsAll)
    return (
        <div className="overflow-x-auto my-10  font-bold">

            <Helmet>
                <title> CraftAll | JuteWoody </title>
            </Helmet>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th> Serial </th>
                        <th> Item Name </th>
                        <th> Sub Category Name </th>
                        <th> Customization </th>
                        <th> Stock Status </th>
                        <th> Details </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}

                    {
                        craftsAll.map((craft, index) => <tr key={craft._id}>
                            <th> {index + 1} </th>
                            <td> {craft.itemName} </td>
                            <td> {craft.subCategoryName} </td>
                            <td> {craft.customization} </td>
                            <td> {craft.stockStatus} </td>
                            <td> <Link to={`/viewDetailsAll/${craft._id}`} > <button className="btn bg-[#565264] hover:bg-[#393644] text-white "> View Details </button> </Link> </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default CraftsAll;