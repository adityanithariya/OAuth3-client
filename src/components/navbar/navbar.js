import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogoutSession } from '../../features/userSlice';
import './navbar.css';


export default function NavBar(props){

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(setLogoutSession())
        navigate('/')
    }


    return(
        <div className="navBar">
            <div className="navBar_left">
                <h4>{props.title}</h4>
            </div>

            <div className="navBar_right">
                <button onClick={logout} className="btn btn-dark">Logout</button>
            </div>
        </div>
    )
}