import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Carusel from './Carusel';

const Home = () => {
    const highlights = useLoaderData()
    return (
        <div className="bg-[#fff5cb] h-full p-[20px] text-center">
            {/* carousel */}
            <div>
            <Carusel></Carusel>
            </div>

            {/* short services */}
            <div className="grid grid-cols-3 gap-8 m-12 grid-items-center">
                {
                highlights.map(highlight => 
                    <div className="card bg-white rounded-3xl hover:bg-[#175c62] shadow-xl">
                        
                        <div className="card-body items-center text-[#175c62] hover:text-white text-center">
                        <PhotoView src={highlight.picture}>
                        <img src={highlight.icon}  alt="" className="w-2/6" />
                        </PhotoView>
                            <h2 className="card-title">{highlight.title}</h2>
                            <p>{highlight.description.slice(0, 100)}</p>
                            <div className="card-actions w-full">
                            <Link to={`/services/${highlight._id}`}>
                                <button className="btn w-full hover:bg-white bg-[#01cab8] hover:text-[#01cab8] text-white hover:border-2 hover:border-[#01cab8] rounded-full">view details</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
            <Link to="/services" className="btn border-0 bg-[#01cab8] text-2xl hover:text-[#01cab8] hover:bg-white hover:border-2 hover:border-[#01cab8] rounded-full">see more</Link>
            
        </div>
    );
};

export default Home;