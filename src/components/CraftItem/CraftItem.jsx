import PropTypes from 'prop-types';


const CraftItem = ({craftItem}) => {

    console.log(craftItem)

    const {photoURL, itemName, shortDescription} = craftItem
    return (
        <div className="card  bg-base-100 shadow-md">
            <figure><img src={photoURL} alt="CraftItems image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl"> {itemName} </h2>
                <p className='my-2 font-semibold text-[#a2abad]'> {shortDescription} </p>
                <div className="card-actions mt-4">
                    <button className="btn w-full btn-primary"> View Details </button>
                </div>
            </div>
        </div>
    );
};

CraftItem.propTypes = {
    craftItem : PropTypes.object.isRequired
}


export default CraftItem;