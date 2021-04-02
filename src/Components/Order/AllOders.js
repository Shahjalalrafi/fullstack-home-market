import React from 'react';

const AllOders = ({productDetails}) => {
    const {name, authorName, image, price , time, LogedInUserName, logedInUserEmail} = productDetails
    return (
        <div className="card col-md-3 col-sm-12 p-3 m-5 shadow" >
                <img src={image} className=" card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Author Name: {authorName}</p>
                        <p className="card-text">Price: {price}</p>
                        <h6>BUYER: {LogedInUserName}</h6>
                        <h6>BUYER EMAIL: {logedInUserEmail}</h6>
                        <h6>PURCHASE Time: {time}</h6>
                    </div>
            </div> 
    );
};

export default AllOders;