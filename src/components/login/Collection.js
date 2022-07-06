import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "./Collection.css"

const Collection = () => {

 const {handleClick} = useContext(Context)

    return (
        <div className="col-btn">
            <Link to="/photo">
              <button id="btncol" onClick={handleClick}>VIEW NIKE COLLECTIONS</button>
            </Link>
        </div>
    )
}

export default Collection