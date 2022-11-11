import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()

    
    return (
        <div className="bg-[#fff5cb] h-full p-5">

            <h1>services {services.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                services.map(service => 
                    <div className="card bg-white rounded-3xl hover:bg-[#175c62] shadow-xl my-5">
                        <div className="card-body items-center text-[#175c62] hover:text-white text-center">
                        <PhotoView src={service.picture}>
                        <img src={service.icon}  alt="" className="w-2/6" />
                        </PhotoView>
                            <h2 className="card-title">{service.title}</h2>
                            <h2 className="card-title">${service.price}</h2>
                            <p>{service.description.slice(0, 100)}</p>
                            <div className="card-actions w-full justify-center">
                        <Link to={`/services/${service._id}`}>
                            <button className="btn w-full hover:bg-white bg-[#01cab8] hover:text-[#01cab8] text-white hover:border-2 hover:border-[#01cab8] rounded-full">view details</button>
                        </Link>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        
        </div>
    );
};

export default Services;