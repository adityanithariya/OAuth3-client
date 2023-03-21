import React,{useEffect} from "react";
import "./dashboard.css";
import { setLogoutSession } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { LoggedIn } from "../../app/useStore";

export default function Dashboard() {

    const loggedIn = LoggedIn()

    useEffect(() => {
        if(loggedIn==false){
            navigate('/')
        }
    },[])


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(setLogoutSession())
        navigate('/')
    }

    const openProfile = () => {
        navigate('/profile')
    }


    return (
        <div className="baseFlex">
            <div className="navBar">
                <div className="navBar_left">
                    <h4>Dashboard</h4>
                </div>

                <div className="navBar_right">
                <a style={{marginRight:50}} class="btn btn-outline-primary"href="https://goerli.etherscan.io/address/0x5Ea8bcA9c9b67BDa60b3407AEc642f22c15D1e76" role="button">Deployed At 0x5EaXXXe76</a>
                    <button onClick={openProfile} style={{marginRight:'15px'}} className="btn btn-outline-primary">Profile</button>
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

                    <div className="baseFlex card" onClick={()=>navigate('/permissions')}>
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