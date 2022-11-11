import React, { useContext } from 'react';
import { PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Review from '../Review/Review';

const SingleService = () => {
    const {user} = useContext(AuthContext);
    const service = useLoaderData()
    const {title, picture, description,} = service;
    return (
        <div>
            <div className="hero min-h-screen bg-[#ffcbcbe4]">
            <div className="text-center w-full lg:w-1/2">
            <PhotoView src={picture}>
                <img src={picture} className=" w-full lg:h-[400px] lg:m-12 mb-4 rounded-lg shadow-2xl" alt=''/>
            </PhotoView>
                <div className="py-4">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                </div>
            </div>
            </div>
            <div>
                {
                    user?.email ? <>
                    <Review service={service}></Review>
                    </>: ''
                }
            </div>
        </div>
    );
};

export default SingleService;