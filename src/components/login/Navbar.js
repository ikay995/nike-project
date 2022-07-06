import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { Context } from "../../Context"



function Navbar(props) {

   const {displayNav, loggedOut, showNav, handleClick} = useContext(Context)

    
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"





    return (
        <header>
            <Link to="/"><h2 onClick={handleClick}>I❤️NikeJordans</h2></Link>
            <div className={`${displayNav && "nav-right"}`}>
                {displayNav && <p>Profile</p>}
               <Link to="/cart">
                   {displayNav && <i className={`${cartClassName} ri-fw ri-2x`} onClick={handleClick}></i>}
               </Link>
               <Link to="/">{displayNav && <button id="nav-button" onClick={loggedOut}>Logout</button>}</Link>
            </div>       
        </header>
    )
}

export default Navbar
