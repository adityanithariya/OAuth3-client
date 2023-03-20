import React,{useEffect} from "react";
import './docScreen.css'
import { Link,useNavigate } from "react-router-dom";
import './docScreen.css'
import { useStore ,UseSigners,UseContract,UseProvider} from "../../app/useStore";

export default function DocScreen() {

    const navigate = useNavigate();
    const store  = useStore()

    // useEffect(() => {
    //     if(store.loggedIn){
    //         navigate('/')
    //     }
    // }, []);

    const [adhaarNumber, setAdhaarNumber] = React.useState('');
    const [loading, setLoading] = React.useState(false);


    const handleAdhar = (e) => {
            setAdhaarNumber(e.target.value);
    }

    const sendOTp = async () => {

        if((adhaarNumber).toString().length != 12){
            alert("Please Enter Valid Adhaar Number");
            return;
        }
        setLoading(true);
        await fetch("https://api.emptra.com/aadhaarVerification/requestOtp", {method: "POST",
            headers: {
                'secretKey': process.env.REACT_APP_ADH_CLI_SEC,
                'Content-Type': 'application/json',
                'clientId': process.env.REACT_APP_ADH_CLI_ID
            },
            body: JSON.stringify({aadhaarNumber: adhaarNumber,})})
        .then( (response) => { 
          response.json().then( (data) => {
                console.log(data);
                if(data?.result?.success){
                    const clientID = data.result.data.client_id
                    navigate(`/verifyAdhaar?clientId=${clientID}`)
                }else{
                    setLoading(false);
                    alert("Something went wrong");
                }
               
          })

            })
        .catch( (error) => { 
            setLoading(false);
            alert("Something went wrong");
            console.log(error)
            console.warn(error?.response?.body); });
    }


  return(
    <div className="screen baseFlex">
        <div className="baseFlex registrationScreen">
            <h5 style={{color:'gray'}}>Registration</h5>
            <h2 className="heading">Add Documents</h2>
            <div className="baseFlex personalDetails">
                {/* <div className="baseFlex mt-3 detailHolder">
                    <label for="adhaarFile">Upload Adhaar Card</label>
                    <input type="file" className="form-control mt-3 fileInput" id="adhaarFile" />
                   
                </div> */}

                <div className="baseFlex mt-3 detailHolder">
                    <label for="adhaarNumber">Adhaar Number</label>
                    <input  type="text" maxLength={12}  onInputCapture={handleAdhar} className="form-control mt-3 detailInput" id="adhaarNumber" placeholder="Enter Adhaar No. "/>
                </div>

                <div className="baseFlex mt-4 detailHolder">
                    <span style={{color:'GrayText'}}>We will send an OTP to your registered mobile number !</span>
                    <button disabled={loading} type="button" className="btn btn-primary mt-3" onClick={sendOTp}>Verify Adhaar</button>
                </div>

            </div>

        </div>
    </div>
  )
}