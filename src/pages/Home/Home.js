import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Banner from './Banner';
import GroupAdvice from './GroupAdvice';

const Home = () => {
    const homeServices = useLoaderData();
    const highlights = homeServices.slice(0, 3)
    

    return (
        <div className="bg-[#fff5cb] h-full p-[20px] text-center">
            {/* carousel */}
            <div>
                <Banner></Banner>
            </div>


            {/* short services */}
            <div className="pb-12">
            <div className="grid lg:grid-cols-3 gap-8 m-12 grid-items-center">
                {
                highlights.map(highlight => 
                    <div key={highlight._id} className="card bg-white rounded-3xl hover:bg-[#175c62] shadow-xl">
                        
                        <div className="card-body items-center text-[#175c62] hover:text-white text-center">
                        <PhotoView src={highlight.picture}>
                        <img src={highlight.icon}  alt="" className="w-2/6" />
                        </PhotoView>
                            <h2 className="card-title">{highlight.title}</h2>
                            <h2 className="card-title">${highlight.price}</h2>
                            <p>{highlight.description.slice(0, 100)}</p>
                            <div className="card-actions w-full justify-center">
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
        
        {/*this is group therapy section  */}
        <div>
        <GroupAdvice></GroupAdvice>
        </div>
        {/* contact */}
        <div>
        <Contact></Contact>
        </div>
            
        </div>
    );
};

export default Home;