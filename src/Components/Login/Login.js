import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './Firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [logedInUser, setLogedInUser] = useContext(userContext)

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogin = () => {
        
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result.user.displayName)
               const userDetails = {
                   name: result?.user?.displayName,
                   email: result?.user?.email,
                   photo: result?.user?.photoURL
               }
               setLogedInUser(userDetails)
               history.replace(from);
               
            }).catch((error) => {
               console.log(error)
            });
    }


    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            const userDetails = {
                name: '',
                email: '',
                photo: ''
            }
            setLogedInUser(userDetails)
            history.replace(from);
          }).catch((error) => {
              console.log(error)
          });
    }

    return (
        <div className='row'>
            <div className="col-3 m-auto text-center">
            {
                logedInUser.email ? <button className='btn btn-success' onClick={handleLogOut} >Log Out</button> : <button className='btn btn-success' onClick={handleLogin}>Login IN With google</button>
            }
            </div>
        </div>
    );
};

export default Login;