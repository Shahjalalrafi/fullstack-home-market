import React from 'react';
import AddBooking from './AddBooking';
import Sidebar from './Sidebar';

const SidebarWithAddBooking = () => {
    return (
        <div className='row container m-auto'>
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8">
                <AddBooking />
            </div>
        </div>
    );
};

export default SidebarWithAddBooking;