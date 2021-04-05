import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ productDetails }) => {
    const { name, colour, image, price, _id } = productDetails
    return (
            <div className="card col-md-3 col-sm-12 p-3 m-5 shadow" >
                <img src={image} className=" card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{colour}</p>
                        <p className="card-text">{price}</p>
                        <Link to= {`/checkout/${_id}`}><button className="btn btn-success">Buy Now</button></Link>
                    </div>
            </div> 
           
    );
};

export default SingleProduct;