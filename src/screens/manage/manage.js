import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLogoutSession } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import './manage.css';
import { ethers } from 'ethers';
import oauth3 from '../../cache/address.json'
import abi from '../../artifacts/contracts/OAuth3.sol/OAuth3.json'
import NavBar from '../../components/navbar/navbar';


export default function ManageScreen() {

    return (
        <div className="screen baseFlex manageScreen">
              <NavBar title='Manage Permissions' />
              <div className="screen baseFlex dashboard">
                    <span style={{color:"gray"}}>Connected Document</span>
                    <h3>Adhaar Card</h3>
                    <div className="baseFlex siteHolder">
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