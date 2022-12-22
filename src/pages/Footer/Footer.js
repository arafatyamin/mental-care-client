import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <footer className="footer footer-center py-2 bg-[#175c62] text-white">
            <div>
                <p>Copyright © 2022 - All right reserved by Mental Health</p>
                <div className='flex '>
                    <Link className="link link-hover mr-4">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                </div>
            </div>
            
            </footer>
    );
};

export default Footer;