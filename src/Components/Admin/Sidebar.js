import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

const Sidebar = () => {
    return (
        <div className='sidebar bg-success container m-auto'>
            <div><Link to='/admin/manager'><button className='btn btn-danger my-3'>Manage Books</button></Link></div>
            <div><Link to='/admin/addBook'><button className='btn btn-warning my-3'>Add Book</button></Link></div>
        </div>
    );
};

export default Sidebar;