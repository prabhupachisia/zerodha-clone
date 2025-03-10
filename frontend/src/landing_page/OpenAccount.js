import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div className='container p-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha Account</h1>
                <p className='text-muted mb-4 mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
                <Link to="/signup" className='btn btn-primary fs-5 mb-5' style={{ width: "12.5%", margin: "0 auto" }}>Signup now</Link>
            </div>
        </div>
    );
}

export default OpenAccount;