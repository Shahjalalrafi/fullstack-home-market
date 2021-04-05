import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import AllOders from './AllOders';
import loading from '../../Images/spinner.gif'

const Order = () => {

    const [bookings, setBookings] = useState([])
    const [logedInUser, setLogedInUser] = useContext(userContext)

    useEffect(() => {
        fetch(`https://mighty-shore-21196.herokuapp.com/newBookings?email=` + logedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div style={{ width: '80%', margin: '0 auto' }} >
            <div className="row">
                <h1 className='text-center text-success'>Your orders</h1>
                {
                    bookings.length > 0 ? bookings.map(singleBooking => <AllOders key={singleBooking._id} productDetails={singleBooking} />) : <div className='text-center'><img src={loading} alt=''></img></div>
                }
            </div>
        </div>
    );
};

export default Order;