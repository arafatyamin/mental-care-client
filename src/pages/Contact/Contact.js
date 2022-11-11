import React from 'react';

const Contact = () => {
    return (
        <div className="flex w-full items-center py-12">
            <div className="flex flex-col w-1/2 items-center py-12">
                <h1 className="text-5xl pb-6">Send a Message</h1>
                <input type="text" placeholder="your name" className="input input-bordered w-full mb-4" />
                <input type="email" placeholder="your email" className="input input-bordered w-full mb-4" />
                <textarea className="textarea textarea-bordered mb-4 w-full" placeholder="message"></textarea>
                <input type="submit" placeholder="submit" className="btn w-full max-w-xs" />
            </div>
            <div className="w-1/2 items-center py-12">
                <h1 className="text-5xl pb-4">Location</h1>
                <p>551 Water Color Green Ball St, New York, NY 2041, USA</p>
            </div>
        </div>
    );
};

export default Contact;