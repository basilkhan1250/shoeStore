import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const shoes = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
    };

    const { ProductID } = useParams();
    const Product = shoes[ProductID];
    const { name, img } = Product;

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f8f8', // Off-white background color for the container
        padding: '10px',
    };

    const imgContainerStyle = {
        backgroundColor: '#f8f8f8', // Off-white background color for the image container
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Optional: Add a subtle shadow for better separation
    };

    const imgStyle = {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '10px',
    };

    return (
        <div style={containerStyle}>
            <h2>{name}</h2>
            <div style={imgContainerStyle}>
                <img src={img} alt={name} style={imgStyle} />
            </div>
        </div>
    );
};

export default ProductDetails;
