import React from "react";
import NavBar from "../../components/navbar/navbar";
import './sdkLogin.css'
import { ethers } from "ethers";
import oauth3 from '../../cache/address.json'
import abi from '../../artifacts/contracts/OAuth3.sol/OAuth3.json'

export default function SDKLogin() {

    const [showCred, setShowCred] = React.useState(false)
    const [clientID, setClientID] = React.useState('')
    const [clientSecret, setClientSecret] = React.useState('')
    const [loading, setLoading] = React.useState(false)


    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    

    const generateCred = async () => {
        try {
            setLoading(true)
            const client_id = makeid(10)
            const client_secret = makeid(10)

        
            const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
            const OAuth3Contract = new ethers.Contract(oauth3["oauth3"], abi["abi"], provider)

            await provider.send("eth_accounts", [])

            const userWallet = new ethers.Wallet("0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0", provider)
            const userSigner = userWallet.connect(provider)

            const tx = await OAuth3Contract.connect(userSigner).addClient(client_id,client_secret,{gasLimit: 5000000});
            console.log(await tx.wait())
            setClientID(client_id)
            setClientSecret(client_secret)
            setShowCred(true)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert('Something went wrong')
        }
        

    }


    return (
        <div className="screen baseFlex sdkScreen">
            <NavBar title='OAuth3 SDK Login' />
            <div className="screen baseFlex dashboard">
                <span style={{color:"gray"}}>Welcome to</span>
                <h3>SDK Documentaion</h3>

                <div>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error animi sit! Ipsam quo praesentium, aspernatur ipsa placeat natus recusandae minus, aperiam error eius perspiciatis, tempore ab debitis non. Voluptatibus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error animi sit! Ipsam quo praesentium, aspernatur ipsa placeat natus recusandae minus, aperiam error eius perspiciatis, tempore ab debitis non. Voluptatibus?</p>
                    <br/>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error animi sit! Ipsam quo praesentium, aspernatur ipsa placeat natus recusandae minus, aperiam error eius perspiciatis, tempore ab debitis non. Voluptatibus?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error animi sit! Ipsam quo praesentium, aspernatur ipsa placeat natus recusandae minus, aperiam error eius perspiciatis, tempore ab debitis non. Voluptatibus?</p>
                   
                </div>

                <div>
                    <span style={{color:"gray"}}>Client ID</span>
                    {showCred ? <h5>{clientID}</h5> :<h5>*********</h5>}

                </div>

                <div>
                    <span style={{color:"gray"}}>Client Secret</span>
                    {showCred ? <h5>{clientSecret}</h5> :<h5>*********</h5>}
                </div>
                {!showCred && <button disabled={loading} onClick={generateCred} className="btn btn-outline-dark mt-20">Get Client ID & Secrets</button>}
                
            </div>
        </div>
    );
}