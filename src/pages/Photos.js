import React, {useContext} from "react"

import Image from "../components/Image"
import Navbar from "../components/login/Navbar"
import {Context} from "../Context"
import {getClass} from "../utils/Index"

function Photos() {
    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
       <> 
        <Navbar />
        <main className="photos">
            {imageElements}
        </main>
       </> 
    )
}

export default Photos