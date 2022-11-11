import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/groupTheraphy.jpg'

const GroupAdvice = () => {
    return (
        <div className="hero h-96
            " style={{ backgroundImage: `url(${img2})` }}>
        <div className="hero-overlay bg-opacity-60 h-96"></div>
        <div className="hero-content text-center text-neutral-content justify-start">
            <div className="w-1/2">
            <h1 className="mb-5 text-5xl font-bold">Get better with group therapy</h1>
            <p className="mb-5">Depending on the nature of your problem psychotherapy can be an ideal choice for addressing your concerns and making positive changes in your life.</p>
            <div>
                <p>Online Booking</p>
                <Link to="/" className="btn hover:bg-white bg-transparent text-white hover:text-[#175c62] border-white rounded-full">learn more</Link>
            </div>
            </div>
        </div>
        </div>
    );
};

export default GroupAdvice;