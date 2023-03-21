import React, { useEffect } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import oauth3 from '../../cache/address.json'
import abi from '../../artifacts/contracts/OAuth3.sol/OAuth3.json'
import { useStore } from "../../app/useStore";
import AddBox from "../../components/add/add";


export default function LoginScreen() {

    const store  = useStore()
    const navigate = useNavigate();

    useEffect(() => {
        if(store.loggedIn){
            navigate('/dashboard')
        }
    }, []);


    const [provider, setProvider] = React.useState(null);
    const [contract, setContract] = React.useState(null);



    useEffect(() => {
        if (window?.ethereum) {
            console.log('MetaMask is installed!');
            getProvider()
        } else {
            console.log('MetaMask is not installed.');
        }
    }, [window?.ethereum]);

    const getProvider = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const OAuth3Contract = new ethers.Contract(oauth3["oauth3"], abi["abi"], provider)

        setContract(OAuth3Contract)
        setProvider(provider)
    }




    function UUID(){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    const onConnectPress = async () => {

        try {
            await provider.send("eth_accounts", [])
            const userWallet = new ethers.Wallet("0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0", provider)
            const userSigner = userWallet.connect(provider)

            const ownerWallet = new ethers.Wallet(process.env.REACT_APP_OWNER_PRIVATE_KEY, provider)
            const ownerSigner = ownerWallet.connect(provider)


            const tx = await contract.connect(ownerSigner).getUser(userSigner.address);

            if(tx.uid==''){
                console.log("user not found")
                const addUserTX = await contract.connect(userSigner).addUser(UUID(), {gasLimit: 500000})
                if((await addUserTX.wait()).logs){
                    console.log("user added")
                    console.log((await addUserTX.wait()).logs)
                    navigate('/uploadDocument')
                }
            }else{
                console.log("user found")
                if(store.loggedIn){
                    navigate('/dashboard')
                }else{
                    navigate('/uploadDocument')
                }
               
            }
        } catch (error) {
            console.log(error);
            alert(error?.message ? error.message : 'Please connect to Metamask')
        }

    }


    return (
        <section className="screen baseFlex landingSection">
            <div className="baseFlex loginHolder">
                <span style={{ color: 'lightgrey', marginBottom: 5 }}>Welcome to OAuth3.0</span>
                <h2 style={{ fontFamily: 'ProductSansBold' }}>Login with Secure<br />and Strong Authentications !</h2>

                <p style={{ width: '40%', color: 'lightgrey' }}>
                    OAuth3.0 is a decentralized authentication protocol that enables users to securely login with
                    their govt official documents whithout worrying about data leaks and usage.
                </p>
                <button type="button" className="btn btn-outline-light mt-3" onClick={onConnectPress}>Connect Metamask</button>
            </div>
            <a class="btn btn-outline-light"href="https://goerli.etherscan.io/address/0x5Ea8bcA9c9b67BDa60b3407AEc642f22c15D1e76" role="button">Deployed At 0x5EaXXXe76</a>
        </section>
    );
}