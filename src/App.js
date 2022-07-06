import React, { useState, useContext } from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Login from "./components/login/Login"
import { Context } from "./Context"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {  
    const {showNav} = useContext(Context)

    

 
 
    return (
        <div>
            {showNav && <Header onLogOut={handleLogOut} />}
            <Switch>
                <Route exact path="/">
                    <Header />
                </Route>
                <Route path="/photo">
                    <Photos />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    )
}

export default App