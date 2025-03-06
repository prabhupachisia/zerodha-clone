import React from 'react';

function Brokerage() {
    return (
        <div className='container border-top'>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-8 p-4'>
                    <a href="" style={{ textDecoration: "None" }}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{ textAlign: "left", lineHeight: "1.8" }} className='small'>
                        <li className='text-muted'>Call & Trade and RMS auto-squareoff: Additional charges of ? 50 GST per order.</li>
                        <li className='text-muted'>Digital contract notes will be sent via e-mail.</li>
                        <li className='text-muted'>Physical copies of contract notes, if required, shall be charged ? 20 per contract note. Courier charges apply.</li>
                        <li className='text-muted'>For NRI account (non-PIS), 0.5% or ? 100 per executed order for equity (whichever is lower).</li>
                        <li className='text-muted'>For NRI account (PIS), 0.5% or 2200 per executed order for equity (whichever is lower).</li>
                        <li className='text-muted'>If the account is in debit balance, any order placed will be charged 240 per executed order instead of 220 per executed order.</li>
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href="" style={{ textDecoration: "None" }}><h3 className='fs-5'>List of Charges</h3></a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;