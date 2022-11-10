import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const SingleService = () => {
    const service = useLoaderData()
    const {title, picture, description,} = service;
    return (
        <div>
            <div className="hero min-h-screen bg-[#ffcbcbe4]">
            <div className="text-center w-1/2">
                <img src={picture} className=" w-full h-[400px] m-12 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                </div>
            </div>
            </div>
            <div>
                <Review service={service}></Review>
            </div>
        </div>
    );
};

export default SingleService;