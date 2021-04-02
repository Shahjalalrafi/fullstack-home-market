import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Header = () => {
    
    const [logedInUser, setLogedInUser] = useContext(userContext)

    const handleLogOut = () => {
        console.log('hell')
    }

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link className="navbar-brand" href="#">HOME MARKET</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/home'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/order'>Orders</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to='/admin'>Admin</Link>
                        </li>
                        <li class="nav-item">
                            {
                                logedInUser.email ? <Link className="nav-link " onClick={handleLogOut} to='/login'>{logedInUser.name}</Link> : <Link className="nav-link " to='/login'>Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;