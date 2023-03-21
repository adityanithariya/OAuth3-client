import React, { useEffect } from 'react';
import './manage.css';
import NavBar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router-dom';

export default function ManageScreen() {

    const navigate = useNavigate();

    const openPerm = () => {
        navigate('/perm')
    }

    return (
        <div className="screen baseFlex manageScreen">
              <NavBar title='Manage Permissions' />
              <div className="screen baseFlex dashboard">
                    <span style={{color:"gray"}}>Connected Document</span>
                    <h3>Adhaar Card</h3>
                    <div className="baseFlex siteHolder">
                        <div onClick={openPerm} className="baseFlex site">
                            <div>
                                <h5>https://google.com</h5>
                                <span style={{color:"gray"}}>Last Updated: 12/12/2020</span>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary">View</button>
                            </div>
                           
                        </div>

                        <div className="baseFlex site">
                            <div>
                                <h5>https://google.com</h5>
                                <span style={{color:"gray"}}>Last Updated: 12/12/2020</span>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary">View</button>
                            </div>
                           
                        </div>

                        <div className="baseFlex site">
                            <div>
                                <h5>https://google.com</h5>
                                <span style={{color:"gray"}}>Last Updated: 12/12/2020</span>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary">View</button>
                            </div>
                           
                        </div>
                        <div className="baseFlex site">
                            <div>
                                <h5>https://google.com</h5>
                                <span style={{color:"gray"}}>Last Updated: 12/12/2020</span>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary">View</button>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
        </div>
    );
}