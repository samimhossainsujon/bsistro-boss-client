import React from 'react';
import img from '../../../assets/shop/banner2.jpg';

const FoodCard = ({ item }) => {
    const { image, name, recipe, category, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="text-center text-2xl text-black font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className='btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;