import React from 'react';
import Manager from './Manager';
import Sidebar from './Sidebar';

const SidebarWithManager = () => {
    return (
        <div className='row container m-auto'>
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8">
                <Manager />
            </div>
        </div>
    );
};

export default SidebarWithManager;