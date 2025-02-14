import React from "react";
import Cursor from "./cursor";
import Icon from "./assets/Icon.png"
import {Link} from 'react-router-dom'

function Inwork(){

    return(
        <>
        <Cursor />
       <div className="wbg">
       <Link to = "/work"> <img src={Icon} className="icon1" alt="" /></Link>

       </div>
       </>
    )
}

export default Inwork;
