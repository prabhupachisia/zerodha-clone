import React from 'react';

function Footer() {
    return (
        <footer className='border-top bg-light'>
            <div className='container  mt-5 '>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src="media/images/logo.svg" alt="logo" width="50%" />
                        <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                    </div>
                    <div className='col'>
                        <h3 className='text-muted fs-4 mb-4'>Company</h3>
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>About</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Products</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Pricing</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Referral programme</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Carrers</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Zerodha.tech</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Press & media</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Zerodha Cares (CSR)</a><br />
                    </div>
                    <div className='col'>
                        <h3 className='text-muted fs-4 mb-4'>Support</h3>
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Contact us</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Support Portal</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Z-Connect blog</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>List of charges</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Downloads & resources</a><br />
                    </div>
                    <div className='col'>
                        <h3 className='text-muted fs-4 mb-4'>Account</h3>
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Open and account</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>Fund transfer</a><br />
                        <a href="#" style={{ textDecoration: "None", color: "black" }} className='text-muted mb-3 fs-5'>60 day challenge</a><br />
                    </div>
                </div>
                <div className='mt-5 text-muted' style={{ fontSize: "14px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
                <div className='text-center mb-3'>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}>NSE</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}>BSE</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}>MCX</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}>Terms & conditions</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}> Policies & procedures</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}> Privacy Policy</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}> Disclosure</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}>For investor's attention</a>
                    <a className='text-muted mx-3' style={{ textDecoration: "None" }}>Investor charter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;