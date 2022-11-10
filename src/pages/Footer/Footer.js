import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
            <footer className="footer footer-center p-4 bg-[#175c62] text-white">
            <div>
                <p>Copyright © 2022 - All right reserved by Mental Health</p>
            </div>
            <div>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            </div>
            </footer>
    );
};

export default Footer;