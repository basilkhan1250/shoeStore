import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { ProductId } = useParams()

    return (
        <div>
            <h1>Product Details Of {ProductId}  </h1>
        </div>
    )
}

export default ProductDetails;