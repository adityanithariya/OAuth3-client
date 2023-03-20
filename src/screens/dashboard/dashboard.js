import React from "react";
import "./dashboard.css";
import { setLogoutSession } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

export default function Dashboard() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(setLogoutSession())
        navigate('/')
    }


    return (
        <div className="baseFlex">
            <div className="navBar">
                <div className="navBar_left">
                    <h4>Dashboard</h4>
                </div>

                <div className="navBar_right">
                    <button onClick={logout} className="btn btn-dark">Logout</button>
                </div>
            </div>

            <div className="screen baseFlex dashboard">
                <div className="cardHolder">
                    <div className="baseFlex card">
                        <span className="cardHeading">Document Connected</span>
                        <h2 className="cardAmount">1/20</h2>
                    </div>

                    <div className="baseFlex card">
                        <span className="cardHeading">Sites Connected</span>
                        <h2 className="cardAmount">1/20</h2>
                    </div>

                    <div className="baseFlex card">
                        <span className="cardHeading">Manage Persmission</span>
                        <h2 className="cardAmount">View</h2>
                    </div>
                </div>
                <div className="baseFlex mainHolder">
                    <h4 className="mainHeading">Recent Activities</h4>

                    <div className="baseFlex recentActivities">
                        <div className="baseFlex data">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                            <div className="baseFlex recentActivities_right">
                                <span className="main">New Data Request !</span>
                                <span className="sub">Hack2Skill Requested your Adhaar Number.</span>
                                <span style={{marginTop:10}}>1 min ago</span>
                            </div>
                        </div>

                        <span>View</span>
                 
                       
                    </div>

                    <div className="baseFlex recentActivities">
                        <div className="baseFlex data">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                            <div className="baseFlex recentActivities_right">
                                <span className="main">New Data Request !</span>
                                <span className="sub">Hack2Skill Requested your Adhaar Number.</span>
                                <span style={{marginTop:10}}>1 min ago</span>
                            </div>
                        </div>

                        <span>View</span>
                 
                       
                    </div>

                    <div className="baseFlex recentActivities">
                        <div className="baseFlex data">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar" />
                            <div className="baseFlex recentActivities_right">
                                <span className="main">New Data Request !</span>
                                <span className="sub">Hack2Skill Requested your Adhaar Number.</span>
                                <span style={{marginTop:10}}>1 min ago</span>
                            </div>
                        </div>

                        <span>View</span>
                 
                       
                    </div>




                </div>
            </div>

        </div>
    );
}