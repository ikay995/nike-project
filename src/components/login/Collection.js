import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css"

const Collection = () => {
    return (
        <div className="col-btn">
            <Link to="/photo">
              <button id="btncol">VIEW NIKE COLLECTIONS</button>
            </Link>
        </div>
    )
}

export default Collection