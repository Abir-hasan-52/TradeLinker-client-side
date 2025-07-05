import React from 'react';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='min-h-[calc(100vh-64px-452px)] bg-[#F0F4F8] flex justify-center items-center'>
            <section>
                <Banner></Banner>
            </section>
        </div>
    );
};

export default Home;