import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div>
            <Link to='/admin/manager'><h3>Manage Books</h3></Link>
            <Link to='/admin/addBook'><h3>Add Book</h3></Link>

            {/* <h3>Manage Books</h3>
            <h3>Add Book</h3> */}
        </div>
    );
};

export default AdminSideBar;