import React from 'react';

const Carusel = () => {
    return (
        <div className="">
            <div className="carousel h-[600px] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img className="bg-gradient-to-r from-gray-500 w-full" src="https://i.ibb.co/H40M2pV/10541558-18915851.jpg"  alt=""/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/w0jz4dy/10386542-4435105.jpg" className="w-full"  alt=""/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/CBzpxdt/13399737-Decrease-3.jpg" className="w-full" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Carusel;