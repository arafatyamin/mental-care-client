import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data.reverse())
        })
    }, [user?.email])


    // delete review
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, You want to cancel this request')
        if(proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
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
        </div>
            
        </div>
    );
};

export default Reviews;