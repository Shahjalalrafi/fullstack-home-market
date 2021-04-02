import React, { useEffect, useState } from 'react';
import ManagerDetails from './ManagerDetails';
import loading from '../../Images/spinner.gif'

const Manager = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5050/events`)
    .then(res => res.json())
    .then(data => setProduct(data))
    },[])

    return (
        <div className='row'>
            <div className='col-12'>
            {
                product.length > 0 ? product.map(pd => <ManagerDetails key={pd._id} details = {pd} />) :  <div className='text-center'><img src={loading} alt=''></img></div>
            } 
            </div>
        </div>
    );
};

export default Manager;