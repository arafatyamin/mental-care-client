import React, { useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReviews = () => {
    const serviceInfo = useLoaderData();
    const [user, setUser] = useState(serviceInfo)
    console.log(serviceInfo)
    const handleText = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)
    }
    const handleUpdate = event =>{
        event.preventDefault();
        const value = event.target.message.value;
        // console.log(user)
        fetch(`https://doctor-portal-serrver.vercel.app/reviews/${serviceInfo._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount >0){
                toast('review update successfully')
                console.log(data);
                value.reset()
            }
           
        })
        

        
    }
    
    return (
        <div className='mx-auto flex flex-col w-1/2 p-8 bg-gray-200 justify-center'>
            <h2 className='orange-600 py-4 text-center'>Update massage: {serviceInfo.message}</h2>
            <form onSubmit={handleUpdate}>
                <input onChange={handleText} name='message' type="text" defaultValue={serviceInfo.message} className="input input-bordered my-4 rounded-full w-full"/><br/>
            <input className='btn btn-primary rounded-full w-full
            ' type="submit"  value="updated"/>
            </form>
        </div>
       
    );
};

export default UpdateReviews;