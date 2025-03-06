import React from 'react';

function Hero() {
    return (
        <div className='container p-5 '>
            <div className='row text-center border-bottom'>
                <h1>Charges</h1>
                <h4 className='fs-5 mt-3 text-muted mb-5'>List of all charges and taxes</h4>
            </div>
            <div className='row mt-5 text-center'>
                <div className='col p-4'>
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investments (NSE, BSE),<br />
                        are absolutely free — 0 brokerage.</p>
                </div>
                <div className='col p-4'>
                    <img src="media/images/intradayTrades.svg" />
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className="text-muted">Flat 20 or 0.03% (whichever is lower) per<br />
                        executed order on intraday trades across<br />
                        equity, currency, and commodity t className="text-muted"rades. Flat<br />
                        on all option trades.</p>
                </div>
                <div className='col p-4'>
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investments are<br />
                        absolutely free — O commissions & DP<br />
                        charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;