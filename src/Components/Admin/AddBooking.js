import React, { useState } from 'react';
import { Link,  useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddBooking = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [image, setImage] = useState(null)
    const history = useHistory()

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            colour: data.authorName,
            price: data.price,
            image: image
        }

        fetch(`https://mighty-shore-21196.herokuapp.com/newEvent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log(res, 'serverside response')
                history.push('/')
            })
    };

    const handleFile = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'e5e7c3fd0f17a3470da9a5f0de336257')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                console.log(response)
                setImage(response.data.data.display_url);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form className='row m-auto form' onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control col-5 m-4' name="name" placeholder="Name" ref={register} /> <br />
                <input className='form-control col-5 m-4' name="authorName" placeholder="Colour" ref={register} /> <br />
                <input className='form-control col-5 m-4' name="price" placeholder="Price" ref={register} /> <br />
                <input className='form-control col-5 m-4' name="image" type='file' onChange={handleFile} /> <br />

                <input type="submit" className='btn btn-success' />
            </form>
        </div>
    );
};

export default AddBooking;