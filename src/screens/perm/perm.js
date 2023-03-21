import React, { useEffect } from 'react';
import './perm.css';
import NavBar from '../../components/navbar/navbar';


export default function PermScreen() {

    return (
        <div className="screen baseFlex manageScreen">
              <NavBar title='Permissions' />
              <div className="screen baseFlex dashboard">
                    <span style={{color:"gray"}}>Scopes of Adhaar Card</span>
                    <h3>Site - My Admin</h3>
                    <div className="baseFlex siteHolder">
                        <div className="baseFlex site">
                            <div>
                                <h5>Name</h5>
                            </div>
                            <div>
                                <button style={{marginRight:10}} className="btn btn-outline-primary">Accept</button>
                                <button className="btn btn-outline-danger">Decline</button>
                            </div>
                           
                        </div>

                        <div className="baseFlex site">
                            <div>
                                <h5>Adhaar Number</h5>
                            </div>
                            <div>
                                <button style={{marginRight:10}} className="btn btn-outline-primary">Accept</button>
                                <button className="btn btn-outline-danger">Decline</button>
                            </div>
                           
                        </div>

                        <div className="baseFlex site">
                            <div>
                                <h5>DOB</h5>
                            </div>
                            <div>
                                <button style={{marginRight:10}} className="btn btn-outline-primary">Accept</button>
                                <button className="btn btn-outline-danger">Decline</button>
                            </div>
                           
                        </div>

                        <div className="baseFlex site">
                            <div>
                                <h5>Address</h5>
                            </div>
                            <div>
                                <button style={{marginRight:10}} className="btn btn-outline-primary">Accept</button>
                                <button className="btn btn-outline-danger">Decline</button>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
        </div>
    );
}