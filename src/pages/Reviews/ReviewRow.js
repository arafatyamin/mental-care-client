import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({review, handleDelete,}) => {
    
    console.log(review);
    const {serviceName,photo, price,  customer, mobile, _id, message } = review;
    // const [reviewsData, setReviewsData] = useState({})

    // useEffect(() => {
    //     fetch(`http://localhost:5000/services/${service}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setReviewsData(data)
    //     });
    // }, [service])

    
    return (
            <tr>
                
                <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        {
                            
                            <img src={photo} alt="" />
                        }
                    </div>
                    </div>
                </td>
                <td>
                <div className="flex items-center space-x-3">
                    
                    <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">{mobile}</div>
                    </div>
                </div>
                </td>
                <td>
                <p className="text-2xl">{serviceName}</p>
                </td>
                <td>
                <span className="badge badge-ghost text-xl">{price}</span>
                </td>
                <td>{message}</td>
                <th>
                <label>
                    <button onClick={()=>handleDelete(_id)}>X</button>
                </label>
                </th>
                <th>
                <Link to={`/update/${_id}`}>
                <button className="btn btn-ghost btn-xs">edit</button>
                </Link>
                </th>
            </tr>
    );
};

export default ReviewRow;