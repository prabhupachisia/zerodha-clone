import React from 'react';
function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' alt='education' style={{ width: "70%" }} />
                </div>
                <div className='col'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{ textDecoration: "None" }}>Versity <i class="fa-solid fa-arrow-right mb-5"></i></a>
                    <p>TradingQ&A, the most active trading and investment community in for all your market related queries.</p>
                    <a href='' style={{ textDecoration: "None" }}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;