import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const shoes = {
        "nike-sb-zoom-blazer": {
            name: "Nike SB Zoom Blazer Mid Electric",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d95ce95a-54b7-4a88-9d92-56e52809cf23/sb-zoom-blazer-mid-electric-skate-shoes-ZLRvRZ.png",
            price: "$100",
        },
        "nike-aik-pegasus": {
            name: "Nike Air Pegasus 2005",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0281fa6e-8685-483e-b220-d07d0882664e/air-pegasus-2005-mens-shoes-856hjz.png",
            price: "$150",
        },
        "nike-dunk-high-retro": {
            name: "Nike Dunk High Retro",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-mens-shoe-dTVTCk.png",
            price: "$130",
        },
        "nike-sb-zoom-janoski": {
            name: "Nike SB Zoom Janoski OG+Electric",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/834079a6-3ea1-48c6-a891-8c8c218ea7b3/sb-zoom-janoski-og-electric-skate-shoes-9qHPbs.png",
            price: "$105",
        },
        "Nike-Dunk-low-retro": {
            name: "Nike Dunk Low Retro",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2aecf220-1477-4a70-9070-56216a01264b/dunk-low-retro-mens-shoes-njHwD3.png",
            price: "$115",
        },
        "nike-calm-electric": {
            name: "Nike Calm Electric",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b0f34c49-617e-49a6-865a-d8a5f75741ad/calm-electric-mens-slides-5vvbqZ.png",
            price: "$55",
        },
        "nike-air-force": {
            name: "Nike Air Force 1'07 LV8",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00366317-b552-4167-96f5-824ce1a4ea74/air-force-1-07-lv8-mens-shoes-3Q0nlJ.png",
            price: "$125",
        },
        "nike-dragonfly": {
            name: "Nike Dragonfly 2 Elite Electric",
            img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a303cec-482f-4a83-8d76-dcb3c26215ba/dragoy-2-elite-electric-track-field-distance-spikes-4C2Kbs.png",
            price: "$205",
        }
    };

    const { ProductID } = useParams();
    const Product = shoes[ProductID];
    const { name, img, price } = Product;

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

    const priceStyle = {
        textAlign: "start"

    }
    return (
        <div style={containerStyle}>
            <div style={imgContainerStyle}>
                <img src={img} alt={name} style={imgStyle} />
                <h2 style={priceStyle}>{name}</h2>
                <h3 style={priceStyle}>{price}</h3>
            </div>
        </div>
    );
};

export default ProductDetails;
