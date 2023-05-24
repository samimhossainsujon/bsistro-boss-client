import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='feature-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
                subHeading="check it out"
                heading="Featured Item"
            ></SectionTitle>

            <div className='md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20  pt-12 px-36'>
                <div>
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;