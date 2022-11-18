import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const detailsPageReview = () => {
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState([]);
    

    useEffect(() => {
        fetch(`https://doctor-portal-serrver.vercel.app/reviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then(res => {
            
            return res.json()
        })
        .then(data => {
            console.log(data);
            setReview(data)
        })
    }, [user?.email]);
    
    return (
        <div>
            <h1>{review.length}</h1>
        </div>
    );
};

export default detailsPageReview;