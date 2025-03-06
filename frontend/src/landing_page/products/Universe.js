import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return (
        <div className='container'>
            <div className='row p-5 text-center text-muted'>
                <h1>The Zerodha Universe</h1>
                <p className='fs-5 mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-4 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" width="60%" />
                    <p className='small mt-3'>Our assets management venture<br />that is creating simple and transparent index <br />funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-4 mt-5'>
                    <img src="media/images/sensibullLogo.svg" width="70%" />
                    <p className='small mt-3'>Options trading platform that lets you<br />create strategies, analyze positions, and examine<br />data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-4 mt-5'>
                    <img src="media/images/goldenpiLogo.png" width="60%" />
                    <p className='small mt-3'>Investment research platform<br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.</p>
                </div>
                <div className='col-4 p-4 mt-5'>
                    <img src="media/images/streakLogo.png" width="60%" />
                    <p className='small mt-3'>Systematic trading platform<br />
                        that allows you to create and backtest<br />
                        strategies without coding.</p>
                </div>
                <div className='col-4 p-4 mt-5'>
                    <img src="media/images/smallcaseLogo.png" width="60%" />
                    <p className='small mt-3'>Thematic investing platform <br />that helps you invest in diversified <br />baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-4 mt-5'>
                    <img src="media/images/dittoLogo.png" width="50%" />
                    <p className='small mt-3'>Personalized advice on life<br />
                        and health insurance. No spam<br />
                        and no mis-selling.</p>
                </div>
                <Link to="/signup" className='btn btn-primary fs-5 mb-5' style={{ width: "17.5%", margin: "0 auto" }}>Sign up for free </Link>
            </div>
        </div>
    );
}

export default Universe;