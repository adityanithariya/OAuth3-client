import React from "react";
import './docScreen.css'
import { Link,useNavigate } from "react-router-dom";



export default function VerifyAdhaar() {

    const navigate = useNavigate();



    const onContinuePress = () => {
        navigate("/dashboard");
    }

  return(
    <div className="screen baseFlex">
        <div className="baseFlex registrationScreen">
            <h5 style={{color:'gray'}}>Verification</h5>
            <h2 className="heading">Verify Adhaar</h2>
            <span style={{color:'GrayText'}}>An OTP has been sent on 63XXXXX62</span>
            <div className="baseFlex personalDetails">
                <div className="baseFlex mt-3 detailHolder">
                    <label for="otp">Enter OTP</label>
                    <input type="number" maxLength={6} className="form-control mt-3 detailInput" id="otp" placeholder="Ex- XXXXXX"/>
                </div>

                <div className="baseFlex mt-3 detailHolder">
                    <button type="button" className="btn btn-primary mt-3" onClick={onContinuePress}>Submit</button>
                </div>

            </div>

        </div>
    </div>
  )
}