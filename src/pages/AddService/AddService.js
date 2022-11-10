import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {

    const handleServiceAdded = event => {
        event.preventDefault();
        const form = event.target;
        const picture = form.picture.value;
        const title = form.title.value;
        const price = form.price.value;
        const description = form.description.value;
        const icon = form.icon.value;
        console.log(picture, title, price, description, icon);

        const review = {
            picture,
            title,
            price,
            description,
            icon
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <p className="text-3xl text-center p-4">added service</p>
            <form onSubmit={handleServiceAdded} className='grid grid-cols-2 gap-6 mx-4'>
            <input name="picture" type="text" placeholder="picture" className="input w-full bg-gray-200 rounded-full" />
            
            <input name="title" type="text" placeholder="title" className="input w-full bg-gray-200 rounded-full" />
            <input name="price" type="text" placeholder="price" className="input w-full bg-gray-200 rounded-full" />
            <input name="description" type="text" placeholder="description" className="input w-full bg-gray-200 rounded-full" />
            <input name="icon" type="text" placeholder="icon" className="input w-full bg-gray-200  rounded-full" />
            <input type="submit" value="ADD" className="btn btn-primary w-full cols-2"/>
            </form>
        </div>
    );
};

export default AddService;