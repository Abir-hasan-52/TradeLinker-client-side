import React from 'react';
import Banner from './Banner';
import WhyChooseUs from '../../Components/ExtraSections/WhyChooseUs';
import FeaturedBrands from '../../Components/ExtraSections/FeaturedBrands';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-64px-452px)] bg-[#F0F4F8]'>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <TopProducts></TopProducts>
            </section>
            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>
            <section>
                <FeaturedBrands></FeaturedBrands>
            </section>
        </div>
    );
};

export default Home;