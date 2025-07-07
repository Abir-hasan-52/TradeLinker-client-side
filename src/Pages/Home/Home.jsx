import React from 'react';
import Banner from './Banner';
import WhyChooseUs from '../../Components/ExtraSections/WhyChooseUs';
import FeaturedBrands from '../../Components/ExtraSections/FeaturedBrands';
import TopProducts from '../TopProducts/TopProducts';
import AllCategory from '../TopProducts/AllCategory';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-64px-452px)] bg-[#F0F4F8]'>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <h2 className="    text-3xl font-bold text-[#1B365D] mb-6 text-center my-8">All Products</h2>
                 <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-center">
                    Explore our wide range of products from verified suppliers. Find the best deals and quality products for your business needs.   
                </p>

                <AllCategory></AllCategory>
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