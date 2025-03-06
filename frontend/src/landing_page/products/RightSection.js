import React from 'react';

function RightSection({ imageURL, productName, productDescription, link, linkName }) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col p-5 fs-5' style={{ marginRight: "50px" }}>
                    <h1 className='fs-1'>{productName}</h1>
                    <p className='fs-4 text-muted'>{productDescription}</p>
                    <div style={{ marginLeft: "10px" }}>
                        <a href={link} style={{ textDecoration: "None" }}>{linkName} <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col p-5'>
                    <img src={imageURL}  alt ="Error"/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;