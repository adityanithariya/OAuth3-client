import React from "react";
import './docScreen.css'
import { Link,useNavigate } from "react-router-dom";
import './docScreen.css'


export default function DocScreen() {

    const navigate = useNavigate();



    const onContinuePress = () => {
        navigate("/verifyAdhaar");
    }

    
  return(
    <div className="screen baseFlex">
        <div className="baseFlex registrationScreen">
            <h5 style={{color:'gray'}}>Registration</h5>
            <h2 className="heading">Upload Documents</h2>
            <div className="baseFlex personalDetails">
                <div className="baseFlex mt-3 detailHolder">
                    <label for="adhaarFile">Upload Adhaar Card</label>
                    <input type="file" className="form-control mt-3 fileInput" id="adhaarFile" />
                   
                </div>

                <div className="baseFlex mt-3 detailHolder">
                    <label for="adhaarNumber">Adhaar Number</label>
                    <input type="number" className="form-control mt-3 detailInput" id="adhaarNumber" placeholder="Ex- 1234 1234 1234"/>
                </div>

                <div className="baseFlex mt-4 detailHolder">
                    <span style={{color:'GrayText'}}>We will send an OTP to your registered mobile number !</span>
                    <button type="button" className="btn btn-primary mt-3" onClick={onContinuePress}>Verify Adhaar</button>
                </div>

            </div>

        </div>
    </div>
  )
}