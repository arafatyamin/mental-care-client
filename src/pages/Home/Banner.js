import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/bannerpic.jpg'

const Banner = () => {
    return (
            <div className="hero h-96
            " style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60 h-96"></div>
            <div className="hero-content text-center text-neutral-content justify-start">
                <div className="w-1/2">
                <h1 className="mb-5 text-5xl font-bold">Your mental health is as important as physical health</h1>
                <p className="mb-5">Specialising in the diagnosis, treatment and monitoring of mental health disorders.</p>
                <div>
                    <p>Online Booking</p>
                    <Link to="/" className="text-3xl hover:border-b-2">Book here</Link>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Banner;