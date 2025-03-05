import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Navbar from '../Navbar';
import Hero from './Hero';
import Footer from '../Footer';


function ProductsPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
            <Footer />
        </>
    );
}

export default ProductsPage;