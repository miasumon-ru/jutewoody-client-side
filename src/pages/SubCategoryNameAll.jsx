import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SubCategoryNameAll = () => {

    const [subCategoryNames , setSubCategoryNames] = useState([])

  const {subCategoryName} = useParams()

  console.log(subCategoryName)

  useEffect(()=> {

    fetch(`http://localhost:5000/subCategoryNameAll/${subCategoryName}`)
    .then(res => res.json())
    .then(data => setSubCategoryNames(data) )
    
  },[subCategoryName])

  console.log(subCategoryNames)


    return (
        <div>

            <h1> this is subcategory names all : {subCategoryNames.length} </h1>
            
        </div>
    );
};

export default SubCategoryNameAll;