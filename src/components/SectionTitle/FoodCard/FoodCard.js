import React, { useContext } from 'react';
import img from '../../../assets/shop/banner2.jpg';
import { AuthContext } from '../../../Pages/Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handelAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const CartItem = { menuItemId: _id, name, image, price, email: user.email };
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(CartItem)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        } else {
            Swal.fire({
                title: 'Please login to order',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
            <div className="card-body">
                <h2 className="text-center text-2xl text-black font-bold">{name}</h2>
                <p>{recipe}</p>
                <div onClick={() => handelAddToCart(item)} className="card-actions justify-center">
                    <button className='btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4'>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;