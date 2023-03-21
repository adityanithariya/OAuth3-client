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
                <a style={{marginRight:50}} class="btn btn-outline-primary" href="https://goerli.etherscan.io/address/0x5Ea8bcA9c9b67BDa60b3407AEc642f22c15D1e76" role="button">Deployed At 0x5EaXXXe76</a>
                <button onClick={logout} className="btn btn-dark">Logout</button>
            </div>
        </div>
    )
}