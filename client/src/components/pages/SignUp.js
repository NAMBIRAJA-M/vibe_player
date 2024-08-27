import React, { useState, useEffect } from 'react'
import "./loginpage.css"
import spotifyIcon from "../../assets/spotifygreen.png"
import googleIcon from "../../assets/google.png"
import SpaIcon from "@mui/icons-material/Spa";


export default function SignUp() {
    const [signUp, setSignUp] = useState({
        fName: "",
        email: "",
        password: "",
        confirmPassword: "",

    })

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const SignupUser = async () => {
            if (!submitted) return; // Only proceed if the form is submitted

            try {
                const response = await fetch("/signup", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(signUp),
                });

                if (!response.ok) {
                    throw new Error('Signup failed');
                }

                const data = await response.json();
                console.log("data:", data);

                if(submitted){
                    setSignUp({
                        fName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    });
                }

                setSubmitted(false); 
              

            } catch (error) {
                console.error('Error:', error);
            }
        };
  

        SignupUser();
    }, [submitted]);


    function handleSpotify() {
    try {
        window.location.href = 'https://www.spotify.com/in-en/signup';
      } catch (e) {
        console.log("errors while routing", e)
      }
    }
    function handleGoogle() {
        try {
            window.location.href = 'http://localhost:4000/auth/google/signup';
        } catch (e) {
            console.log("errors while routing", e)
        }

    }
    function handleChange(e) {

        const { value, name } = e.target;

        setSignUp((prevValue) => ({
            ...prevValue,  // Spread the previous state
            [name]: value,  // Update the specific field
        }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if(submitted){
            setSignUp({
                fName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        }

       
       
    }

    return (
        <div>
            <div className='login-container' >
                <div className='icon-container'>
                <SpaIcon style={{fontSize:"3rem"}} />

                </div>
                <div className='login-heading'>

                    <p>SignUp To Start Listening</p>
                </div>
                <div className='pre-login'>
                    <div className='goog-container' onClick={handleGoogle} >
                        <img
                            src={googleIcon}
                            alt="google Icon"
                            className='log-icons'
                        />
                        <p> SignUp with Google</p>
                    </div>
                    <div className='spot-container' onClick={handleSpotify} >
                        <img
                            src={spotifyIcon}
                            alt="Spotify Icon"
                            className='log-icons'
                        />
                        <p> SignUp with Spotify</p>
                    </div>

                </div>
                <hr className='hori-line'></hr>
                <form className='form-content' onSubmit={handleSubmit} >

                <label name='name'>Name</label>
                <input type='text' name='fName' placeholder=' Enter your Name' value={signUp.fName} onChange={handleChange} required />
                    <label name='email'>Email</label>
                    <input type='email' name='email' placeholder=' Enter your Email' value={signUp.email} onChange={handleChange} required />
                    <label name='password'>Password</label>
                    <input type='password' name='password' placeholder=' Enter your Password' value={signUp.password} onChange={handleChange} required />
                    <label name='confirmpassword'>Confirm Password</label>
                    <input type='password' name='confirmPassword' placeholder=' Enter Confirm Password' value={signUp.confirmPassword} onChange={handleChange} required />

                    {console.log(signUp)}
                    <button className='logbtn' type='submit' >Sign Up</button>
                </form>
            </div>

        </div>
    )
}
