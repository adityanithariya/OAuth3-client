import React from "react";
import './docScreen.css'
import { Link, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import oauth3 from '../../cache/address.json'
import abi from '../../artifacts/contracts/OAuth3.sol/OAuth3.json'
import { useDispatch } from "react-redux";

export default function VerifyAdhaar() {

    const navigate = useNavigate();
    const dispatch = useDispatch()



    const clientId = new URLSearchParams(window.location.search).get('clientId');
    const [otp, setOtp] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleOtp = (e) => {
        setOtp(e.target.value);
    }




    const verifyAdhaar = async () => {



        if ((otp).toString().length != 6) {
            alert("Please Enter Valid OTP");
            return;
        }

        
        setLoading(true);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(oauth3["oauth3"], abi["abi"], provider)

        await provider.send("eth_accounts", [])


        const userSigner = await provider.getSigner();


        try {
            const apiReq = await fetch("https://api.emptra.com/aadhaarVerification/submitOtp", {
            method: "POST",
            headers: {
                'secretKey': process.env.REACT_APP_ADH_CLI_SEC,
                'Content-Type': 'application/json',
                'clientId': process.env.REACT_APP_ADH_CLI_ID
            },
            body: JSON.stringify({
                "client_id": clientId,
                "otp": otp
            })

        })

        const data = (await apiReq.json()).result

        if (data?.success) {
            const userData = data.data;

            const adhaarSchema = [
                `${new Date().getTime()}`,
                userData.aadhaar_number,
                ``,
                userData.full_name,
                userData.gender == "M" ? 0 : 1,
                [`+91`, "1234567890"],
                `s@gmail.com`,
                [`${userData.address.house}, ${userData.address.street}, ${userData.address.landmark}, ${userData.address.loc}, ${userData.address.po}`, userData.address.city, userData.address.state, userData.address.pincode],
                [0, `${userData.care_of.split(":")[1]}`],
                [parseInt(userData.dob.split("-")[0]), parseInt(userData.dob.split("-")[0]), parseInt(userData.dob.split("-")[0])],
                new Date().getTime(),
                true
            ]


            const tx = await contract.connect(userSigner).addAadhaar(adhaarSchema,{gasLimit: 5000000});

            if ((await tx.wait()).logs) {
                console.log((await tx.wait()).logs)
                alert("Adhaar Verified Successfully");
                navigate("/dashboard");
            }else{
                setLoading(false)
                alert("Error in Verifying Adhaar");
            }
        }else{
            setLoading(false)

            alert("Error")
        }

     


        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }


    return (
        <div className="screen baseFlex">
            <div className="baseFlex registrationScreen">
                <h5 style={{ color: 'gray' }}>Verification</h5>
                <h2 className="heading">Verify Adhaar</h2>
                <span style={{ color: 'GrayText' }}>An OTP has been sent on Registrated Number</span>
                <div className="baseFlex personalDetails">
                    <div className="baseFlex mt-3 detailHolder">
                        <label for="otp">Enter OTP</label>
                        <input type="text" onInputCapture={handleOtp} maxLength={6} className="form-control mt-3 detailInput" id="otp" placeholder="Ex- XXXXXX" />
                    </div>

                    <div className="baseFlex mt-3 detailHolder">
                        <button disabled={loading} type="button" className="btn btn-primary mt-3" onClick={verifyAdhaar}>Submit</button>
                    </div>

                </div>
                <a style={{position:'absolute',top:0,right:20}} class="btn btn-outline-primary mt-4" href="https://goerli.etherscan.io/address/0x5Ea8bcA9c9b67BDa60b3407AEc642f22c15D1e76" role="button">Deployed At 0x5EaXXXe76</a>
            </div>
        </div>
    )
}