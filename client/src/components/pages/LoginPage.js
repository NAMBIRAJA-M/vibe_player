import React,{useState,useEffect}from 'react'
import "./loginpage.css"
import spotifyIcon from "../../assets/spotifygreen.png"
import googleIcon from "../../assets/google.png"


export default function LoginPage() {
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
   useEffect(() => {
    
    const loginUser = async () => {
            try {
                const response = await fetch("/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(login),
                   
                });
    
                if (!response.ok) {
                    throw new Error('Login failed');
                }
    
                const data = await response.json();
                console.log("data:",data);
    
            } catch (error) {
                    console.error('Error:', error); 
                }
            }
    
        if (login) {
            loginUser(); 
        }
    
    }, [login]);
    

    function handleSpotify() {
        try {
            window.location.href = 'http://localhost:4000/auth/spotify/login';
        } catch (e) {
            console.log("errors while routing", e)
        }
    }
    function handleGoogle() {
        try {
            window.location.href = 'http://localhost:4000/auth/google/login';
        } catch (e) {
            console.log("errors while routing", e)
        }

    }
    function handleChange(e) {

        const { value, name } = e.target;

        setLogin((prevValue) => {
            if (name === "email") {
                return {
                    email: value,
                    password: prevValue.password,
                };
            } else if (name === "password") {
                return {
                    email: prevValue.email,
                    password: value,
                };
            }
        })

    }
function handleSubmit(e) {
    e.preventDefault();
}
    return (
        <div>
            <div className='login-container' >
                <div className='login-heading'>
                    <p>Log in to VibePlayer</p>
                </div>
                <div className='pre-login'>
                    <div className='goog-container' onClick={handleGoogle} >
                        <img
                            src={googleIcon}
                            alt="google Icon"
                            className='log-icons'
                        />
                        <p>Continue with Google</p>
                    </div>
                    <div className='spot-container' onClick={handleSpotify} >
                        <img
                            src={spotifyIcon}
                            alt="Spotify Icon"
                            className='log-icons'
                        />
                        <p>Continue with Spotify</p>
                    </div>

                </div>
                <hr className='hori-line'></hr>
                <form className='form-content' onSubmit={handleSubmit} >
                    <label name='email'>Email</label>
                    <input type='email' name='email' placeholder=' Enter your Email' value={login.email} onChange={handleChange} required />
                    <label name='password'>Password</label>
                    <input type='password' name='password' placeholder=' Enter your Password' value={login.password} onChange={handleChange} required />

                    {console.log(login)}
                    <button className='logbtn' type='submit' >Login</button>
                </form>
            </div>

        </div>
    )
}
