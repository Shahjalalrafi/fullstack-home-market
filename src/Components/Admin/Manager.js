import React, { useEffect, useState } from 'react';
import loading from '../../Images/spinner.gif'
import ManagerDetails from './ManagerDetails';

const Manager = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://mighty-shore-21196.herokuapp.com/events`)
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