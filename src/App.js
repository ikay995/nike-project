import React, { useState } from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./components/Header"
import Login from "./components/login/Login"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"

function App() {  
    const [sendValue, setSendValue] = useState(false)  
    const [display, setDisplay] = useState(false)

 const handleChange = (value) => {
    setSendValue(value)
    setDisplay(true)
    console.log(sendValue)
 }

 const handleLogOut = () => {
   setDisplay(false)
   setSendValue(null)
 }

 
 
    return (
        <div>
            <Switch>
                <Route exact path="/">
                  <Header value={sendValue} onLogOut={handleLogOut}/>
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