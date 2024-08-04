import React from "react";
import { Link } from "react-router-dom";

const ProductHome = () => {

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

    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        justifyContent: 'center',
        padding: '10px',
    };

    const cardStyle = {
        backgroundColor: '#f8f8f8', // Off-white background color
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        transition: 'transform 0.3s',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
    };

    const imgStyle = {
        width: '100%',
        maxWidth: '350px',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '10px',   
    };

    const titleStyle = {
        margin: '0',
    };

    return (
        <div style={gridContainerStyle}>
            {Object.entries(shoes).map(([ID, { name, img }]) => (
                <div key={ID} style={cardStyle}>
                    <Link to={ID} id="shoe" style={linkStyle}>
                        <img src={img} alt={name} style={imgStyle} />
                        <h2 style={titleStyle}>{name}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductHome;
