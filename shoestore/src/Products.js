import React from "react";
import { Outlet } from "react-router-dom";

function Products() {


    return (

        <div>
            <h1>Welcome to Products </h1>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}


export default Products