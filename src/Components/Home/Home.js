import React, { useEffect, useState } from 'react';
import SingleProduct from '../singleProduct/SingleProduct';
import loading from '../../Images/spinner.gif'

const Home = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://mighty-shore-21196.herokuapp.com/events`)
    .then(res => res.json())
    .then(data => setProduct(data))
    },[])
    return (
        <div style={{width: '80%', margin: '0 auto'}} >
            <div className="row">
            {
                product.length > 0 ?  product.map(pd => <SingleProduct key={pd._id} productDetails={pd} />) : <div className='text-center'><img src={loading} alt=''></img></div>
            }
            </div>
        </div>
    );
};

export default Home;