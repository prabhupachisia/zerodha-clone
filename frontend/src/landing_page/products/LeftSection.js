import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col p-5 fs-5' style={{ marginLeft: "50px" }}>
                    <h1 className='fs-1'>{productName}</h1>
                    <p className='fs-4 text-muted'>{productDescription}</p>
                    <div style={{ marginLeft: "10px" }}>
                        <a href={tryDemo} style={{ textDecoration: "None" }}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "None" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay} ><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore} style={{ marginLeft: "50px" }}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;