import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, recipe, category, price } = item;
    // console.log(image);
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0px 200px 100px 200px'}} className='w-[100px]' src='http://localhost:3000/static/media/slide1.84401312bc3c9214feec.jpg' alt="" />
            {/* <img className='w-[120px]' src={image} alt="" /> */}
            <div>
                <h3 className='uppercase'>{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className='text-yellow-500'>{price}</p>
            </div>

        </div>
    );
};

export default MenuItem;