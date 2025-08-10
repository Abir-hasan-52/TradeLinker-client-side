import React from 'react';
import Banner from './Banner';
import WhyChooseUs from '../../Components/ExtraSections/WhyChooseUs';
import FeaturedBrands from '../../Components/ExtraSections/FeaturedBrands';
import TopProducts from '../TopProducts/TopProducts';
import AllCategory from '../TopProducts/AllCategory';
import CategoryCard from '../TopProducts/CategoryCard';
import NewArrivals from './NewArrivals';
import DiscountedProducts from './DiscountedProducts';
import Reviews from '../../Components/ExtraSections/Review';
 

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-64px-452px)] bg-[#F0F4F8]'>
            <section>
                <Banner></Banner>
            </section>
            <section>
                 <div className='max-w-7xl mx-auto px-4 py-8'>
                    <h2 className="    text-3xl font-bold text-[#1B365D] mb-6   my-8">All Products</h2>
                 <p className="text-gray-600 max-w-sm mb-10  ">
                    Explore our wide range of products from verified suppliers. Find the best deals and quality products for your business needs.   
                </p>
                 </div>

                <AllCategory></AllCategory>
            </section>
            <section>
                <DiscountedProducts/>
            </section>
             
            <section>
                <WhyChooseUs></WhyChooseUs>
            </section>
            <section>
                <NewArrivals/>
            </section>
            <section>
                <Reviews/>
            </section>
            <section>
                <FeaturedBrands></FeaturedBrands>
            </section>
        </div>
    );
};

export default Home;