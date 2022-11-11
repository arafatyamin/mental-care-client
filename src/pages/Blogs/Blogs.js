import React from 'react';

const Blogs = () => {
    return (
        <div className="bg-[#fff5cb]  lg:p-8">
            <h1 className="text-3xl bg-white text-[#175c62] p-8">1.difference between sql and mysql ?</h1>
            <p className="bg-white text-[#175c62] p-8">What is the difference between SQL and MySQL? In a nutshell, SQL is a language for querying databases and MySQL is an open source database product. SQL is used for accessing, updating and maintaining data in a database and MySQL is an RDBMS that allows users to keep the data that exists in a database organized.</p>

            <h1 className="text-3xl bg-white text-[#175c62] p-8">2.what is jwt and how does it work?</h1>
            <p className="bg-white text-[#175c62] p-8">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>

            <h1 className="text-3xl bg-white text-[#175c62] p-8">3.what is the difference between javascript and nodeJs ?</h1>
            <p className="bg-white text-[#175c62] p-8">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

            <h1 className="text-3xl bg-white text-[#175c62] p-8">4.how does Node Js handle multiple requests at the same time?</h1>
            <p className="bg-white text-[#175c62] p-8">How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blogs;