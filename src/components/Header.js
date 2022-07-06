import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"
import Collection from "./login/Collection"
import Login from "./login/Login"
import Navbar from "./login/Navbar"

function Header(props) {

    let isValid = props.value
    const {displayNav, cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

   



    return (
    <>
        <Navbar></Navbar>
        {!displayNav &&<Login />}
        {displayNav && <Collection />}
      </>  
    )
}

export default Header
