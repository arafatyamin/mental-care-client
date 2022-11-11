import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';

const Review = ({service}) => {
    const {user} = useContext(AuthContext)
    const {_id, title, price, picture} = service;

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`
        const email = form.email.value;
        const mobile = form.mobile.value;
        const message = form.message.value;
        let time = new Date().getTime();
        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            mobile,
            photo: picture,
            message,
            time
        } 
        fetch('https://doctor-portal-serrver.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            toast.success('success added review')
            form.reset();
            
        })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <p className="text-center text-5xl py-2">this is review section</p>
            <form onSubmit={handlePlaceReview} className="card-body text-[#175c62] text-lg  shadow-2xl w-full rounded-3xl bg-[#f2f2f2a5]">
                    <div className="form-control grid lg:grid-cols-2 gap-4">
                    <input name="name" type="text" placeholder="name" className="input input-bordered rounded-full" required/>
                    <input name="email" type="email" placeholder="email" className="input input-bordered rounded-full" defaultValue={user?.email} readOnly />
                    <input name="mobile" type="text" placeholder="your mobile number" className="input input-bordered 
                    active:border-[#175c62] bg-white rounded-full" required/>
                    
                    <input name="photo" type="text" placeholder="title" className="input input-bordered 
                    active:border-[#175c62] bg-white rounded-full" defaultValue={title}  readOnly/>
                    
                    <textarea name="message" className="textarea textarea-bordered h-24 col-span-2" placeholder="your massage" required></textarea>
                    </div>
                    <input type="submit" value="add review" className="btn bg-[#175c62] hover:bg-white hover:text-[#175c62] hover:border-[#175c62]" />
            </form>
            <div>
                
            </div>
        </div>
    );
};

export default Review;