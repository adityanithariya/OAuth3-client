import React from "react";
import './register.css';
import { Link,useNavigate } from "react-router-dom";


export default function RegisterationScreen() {

    const navigate = useNavigate();



    const onContinuePress = () => {
        navigate("/uploadDocument");
    }




    return (
        <div className="screen baseFlex">

            <div className="baseFlex registrationScreen">
                <h5 style={{color:'gray'}}>Registration</h5>
                <h2 className="heading">Personal Details</h2>
                <div className="baseFlex personalDetails">
                    <div className="baseFlex mt-3 detailHolder">
                        <label for="fullNane">Full Name</label>
                        <input type="text" clclassNameass="form-control mt-3 detailInput" id="fullNane" placeholder="Aman Joe"/>
                    </div>

                    <div className="baseFlex mt-3 detailHolder">
                        <label for="email">Email</label>
                        <input type="email" className="form-control mt-3 detailInput" id="email" placeholder="amanjoe@gmail.com"/>
                    </div>

                    <div className="baseFlex mt-3 detailHolder">
                        <label for="city">City</label>
                        <input type="text" className="form-control mt-3 detailInput" id="city" placeholder="Jaipur"/>
                    </div>

                    <div className="baseFlex mt-3 detailHolder">
                        <button type="button" className="btn btn-primary mt-3" onClick={onContinuePress}>Continue</button>
                    </div>
                </div>

            </div>
        </div>
    );
}