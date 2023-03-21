import React, { useEffect,useState } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import oauth3 from '../../cache/address.json'
import abi from '../../artifacts/contracts/OAuth3.sol/OAuth3.json'
import { useStore,LoggedIn} from "../../app/useStore";
import AddBox from "../../components/add/add";


export default function LoginScreen() {

    const store  = useStore()
    const navigate = useNavigate();
    const loggedIn = LoggedIn()

    useEffect(() => {
        if(loggedIn){
            navigate('/dashboard')
        }
    }, []);


    const [provider, setProvider] = React.useState(null);
    const [contract, setContract] = React.useState(null);
    const [loading,setLoading] = useState(false)


    useEffect(() => {
        if (window?.ethereum) {
            console.log('MetaMask is installed!');
            getProvider()
        } else {
            console.log('MetaMask is not installed.');
            window.open("https://metamask.io/", '_blank');
        }
    }, [window?.ethereum]);

    const getProvider = async () => {

        const provider = new ethers.providers.Web3Provider(window.ethereum)
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

            setLoading(true)
            await provider.send("eth_requestAccounts", [])
            const userSigner = await provider.getSigner();

            const ownerWallet = new ethers.Wallet("b9eaaeb5deb8099cc4d31c95cb55f78e849ebdd739859eda3117f214eec7c986", provider)
            const ownerSigner = await ownerWallet.connect(provider)
            console.log(await ownerSigner.getAddress())
            const tx = await contract.connect(ownerSigner).getUser((await userSigner.getAddress()));

            if(tx.uid==''){
                console.log("user not found")
                const addUserTX = await contract.connect(userSigner).addUser(UUID(), {gasLimit: 500000})
                if((await addUserTX.wait()).logs){
                    console.log("user added")
                    alert("User Added Sucessfully")
                    console.log((await addUserTX.wait()).logs)
                    setLoading(false)
                    navigate('/uploadDocument')
                }
            }else{
                setLoading(false)
                alert("User Found")
                if(store.loggedIn){
                    navigate('/dashboard')
                }else{
                    navigate('/uploadDocument')
                }
               
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
            alert('Please connect to Metamask')
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
                <button disabled={loading} type="button" className="btn btn-outline-light mt-3" onClick={onConnectPress}>Connect Metamask</button>
            </div>
            <a class="btn btn-outline-light"href="https://goerli.etherscan.io/address/0x5Ea8bcA9c9b67BDa60b3407AEc642f22c15D1e76" role="button">Deployed At 0x5EaXXXe76</a>
        </section>
    );
}