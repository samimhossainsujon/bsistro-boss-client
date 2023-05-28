import React, { useEffect, useRef, useState } from "react";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { ImQuotesLeft } from 'react-icons/im';


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data));

    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading='What Our Client Say'
                heading='Testimonials'
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map((review) => <SwiperSlide
                    key={review._id}
                >
                    <div className="flex flex-col items-center mx-24 my-16">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />
                        <p className="mt-5 text-4xl font-extrabold text-black"><ImQuotesLeft /></p>

                        <p className="py-8">{review.details}</p>
                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                    </div>
                </SwiperSlide>)}

            </Swiper>

        </section>
    );
};

export default Testimonials;