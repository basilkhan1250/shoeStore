import React from "react";
import { Link } from "react-router-dom";


function Header(){
    return(
        <div>
            <Link to={"/"} >Home</Link> {" | "}
            <Link to={"/Products"} >Products</Link> {" | "}
        </div>
    )
}

export default Header;