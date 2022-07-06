import React, { useContext, useEffect, useReducer, useState } from "react";
import "./Login.css"
import {Link} from "react-router-dom"
import { Context } from "../../Context";

const Login = props => {

    const ctx = useContext(Context)



  return (
    <>
        <form onSubmit={(event)=>ctx.submitFormHandler(event)}>
            <div className="input-div">
              <label htmlFor="email">E-Mail</label>
              <input onChange={(event)=>ctx.emailChangeHandler(event.target.value)} id="email" type="email"></input>
            </div>
            <div className="input-div">
               <label htmlFor="password">Password</label>
               <input onChange={(event)=>ctx.passwordChangeHandler(event.target.value)} id="password" type="password"></input>
            </div>
            <div className="button-submit">
              <button type="submit" disabled={!ctx.validButton}>Login</button>
            </div>
        </form>
    </>
  )
}


export default Login