import React from 'react';

function Hero() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Image didnt Load' className='img-fluid mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='btn btn-primary fs-5 mb-5' style={{width:"12.5%",margin:"0 auto"}}>Signup now</button>
            </div>
        </div>
    );
}

export default Hero;