import React from "react"
import './style.css'
import Icon from "./assets/Icon.png"
import Cursor from "./cursor"
import {Link} from 'react-router-dom'

function About() {
    return (
        <>
            <Cursor />
            <div className="ABbackground">
               <Link to="/"> <img src={Icon} className="icon" alt="" srcset="" /> </Link>

                <div className="aboutme">
                    <h1 className="abme">About Me</h1>
                </div>
                <div className="text">
                    <p className="Para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aperiam quidem ab iste numquam commodi facilis vitae mollitia molestias eligendi? Explicabo minus ipsa autem dignissimos voluptate repellendus, nostrum veritatis vitae.</p> <br />
                    <p className="Para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aperiam quidem ab iste numquam commodi facilis vitae mollitia molestias eligendi? Explicabo minus ipsa autem dignissimos voluptate repellendus, nostrum veritatis vitae.</p><br />
                    <p className="Para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit aperiam quidem ab iste numquam commodi facilis vitae mollitia molestias eligendi? Explicabo minus ipsa autem dignissimos voluptate repellendus, nostrum veritatis vitae.</p><br />

                </div>
            </div>
        </>
    )
}




export default About;
