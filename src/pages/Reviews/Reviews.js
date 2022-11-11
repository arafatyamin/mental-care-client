import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const {user, logout} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    

    useEffect(() => {
        fetch(`https://doctor-portal-serrver.vercel.app?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logout()
            }
            return res.json()
        })
        .then(data => {
            setReviews(data.reverse())
        })
    }, [user?.email, logout])


    // delete review
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to delete this review')
        if(proceed) {
            fetch(`https://doctor-portal-serrver.vercel.app/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    toast('Delete successfully')
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining)
                }
            })
        }
    };
    


    return (
        <div className="px-12">
            <div className="overflow-x-auto w-full">
            {
                    reviews?.length > 0 ? 
                    <table className="table w-full">
            <thead>
            <tr>
                
                <th></th>
                <th>Name & mobile</th>
                <th>email</th>
                <th>title</th>
                <th>price</th>
                <th>message</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                
               reviews.map(review => <ReviewRow
               key={review._id}
               review={review}
               handleDelete={handleDelete}
               ></ReviewRow>) 
               
            }
            
            </tbody>
        </table>
                    :
               <p className="text-5xl py-4 text-center w-full">No reviews were added</p>
            }
  
        </div>
            
        </div>
    );
};

export default Reviews;