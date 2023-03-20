import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLogoutSession } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import { ethers } from 'ethers';
import oauth3 from '../../cache/address.json'
import abi from '../../artifacts/contracts/OAuth3.sol/OAuth3.json'
import NavBar from '../../components/navbar/navbar';

const Profile = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [aadhaar, setAadhaar] = React.useState(null)


    const logout = () => {
        dispatch(setLogoutSession())
        navigate('/')
    }

    useEffect(() => {
        if (window?.ethereum) {
            console.log('MetaMask is installed!');
            getProvider()
        } else {
            console.log('MetaMask is not installed.');
        }
    }, [window?.ethereum]);

    const getProvider = async () => {
        const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
        const OAuth3Contract = new ethers.Contract(oauth3["oauth3"], abi["abi"], provider)

        await provider.send("eth_accounts", [])

        const userWallet = new ethers.Wallet("0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0", provider)
        const userSigner = userWallet.connect(provider)

        const tx = await OAuth3Contract.connect(userSigner).readAadhaar(userSigner.address);
        setAadhaar(generateData(tx))
    }



    const generateData = (arr) => {
        const keys= [
            'id', 
            'uid',
            'vid',
            'name',
            'gender',
            'phone_number',
            'email',
            'addr',
            'care_of',
            'date_of_birth',
            'issue_date',
            'is_verified'
        ]

        let temp=[]
        arr.forEach((element,index) => {
            temp.push({[keys[index]]:`${element}`})
            
        });
        return temp
    }




  return (
    <div  className='baseFlex profileScreen'>
            <NavBar title='Profile'/>

            <div className="screen baseFlex dashboard">
                <span style={{color:"gray"}}>Document Type</span>
                <h3>Adhaar Card</h3>

                {
                    aadhaar!==null && aadhaar.length!==0 &&

                    <div className="baseFlex adhaarHolder">
                        {
                            aadhaar.map((item, index) => {
                                return(
                                    <div key={index} className="baseFlex adhaarCard">
                                        <span style={{color:"gray"}}>{Object.keys(item)[0]}</span>
                                       <div className='title'>
                                            <h4 className='title-text'>{Object.values(item)[0]}</h4>
                                        </div>
                                       
                                    </div>
                                )
                                })
                        }
                </div>
                }

                

            </div>
    </div>

  )
}

export default Profile