import React from 'react';
import quote from '../assets/icons/quote.svg'
import peopole1 from '../assets/images/people1.png'
import peopole2 from '../assets/images/people2.png'
import peopole3 from '../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            reviews:'',
            img: peopole1,
            location: 'New York, NY 10036, United States',

        },
        {
            _id:2,
            name: 'Winson Herry',
            reviews:'',
            img: peopole2,
            location: 'California, CA 10036, United States',

        },
        {
            _id:3,
            name: 'Winson Herry',
            reviews:'',
            img: peopole3,
            location:'florida, FL 10036, United States',

        },
    ]
    return (
        <section className="my-28 pb-5 px-16">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What Our Patients Says</h2>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt="" />
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    reviews.map(review => <Review 
                    key={review._id}
                    review={review}
                    ></Review>)
                }

            </div>
        </section>
    );
};

export default Testimonials;