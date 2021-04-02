import React from 'react';
// import { Link,  useHistory } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
import AdminSideBar from './AdminSideBar';
import AddBook from './AddBook';
import Manager from './Manager';

const Admin = () => {
    // const { register, handleSubmit, watch, errors } = useForm();
    // const [image, setImage] = useState(null)
    // const history = useHistory()

    // const onSubmit = data => {
    //     const eventData = {
    //         name: data.name,
    //         authorName: data.authorName,
    //         price: data.price,
    //         image: image
    //     }

    //     fetch(`https://mighty-shore-21196.herokuapp.com/newEvent`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(eventData)
    //     })
    //         .then(res => {
    //             console.log(res, 'serverside response')
    //             history.push('/')
    //         })
    // };

    // const handleFile = (e) => {
    //     console.log(e.target.files[0])
    //     const imageData = new FormData()
    //     imageData.set('key', 'e5e7c3fd0f17a3470da9a5f0de336257')
    //     imageData.append('image', e.target.files[0])

    //     axios.post('https://api.imgbb.com/1/upload', imageData)
    //         .then(response => {
    //             console.log(response)
    //             setImage(response.data.data.display_url);
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        
        <div className='container-xl row'>
            <h1 className="text-center text-success">My Admin Panel</h1>
            <div className='col-4 bg-success text-white'>
                <AdminSideBar />
            </div>

            <div className='col-8'>       
                <Manager />
                <AddBook />

            </div>
        </div>
    );
};

export default Admin;