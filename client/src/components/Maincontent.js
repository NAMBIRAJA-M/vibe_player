import React, { useState, useEffect } from "react";
import "../maincontentstyles.css";
import Artist from "./Artists";
import Albums from "./Albums";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Profile from "./profile";
import SearchBar from './SearchBar.js';
/* import { useNavigate } from "react-router-dom"; */


function MainContent() {

  /*   const navigate = useNavigate(); */
  const [user, setUser] = useState(null);



  function handleLogIn() {

    try {
      window.location.href = 'http://localhost:4000/auth/spotify/login';
    } catch (e) {
      console.log("errors while routing", e)
    }
  }
  function handleSignUp() {
    try {
      window.location.href = 'http://localhost:4000/auth/spotify/signup';
    } catch (e) {
      console.log("errors while routing", e)
    }
  }

  React.useEffect(() => {
    try {
      fetch("/user")
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setUser({
            displayName: data.displayName,
            username: data.id,
            country: data.country,
            followers: data.followers,
            photos: data.photos.map((pic) => { return pic }),
            product: data.product,
            email: data.emails[0].value,
          });
        })
    } catch (e) {
      console.log("errors while retrieving data", e)
    }

  }, [])
  function handleLogOut() {
    setUser(null);
    console.log("logged out successfully", user)
    console.log("logged out successfully");

  }

  return (
    <div>
      <div className="navbar">
        <div className="navArea">
          <ArrowBackIosIcon className="navArrow" />
          <ArrowForwardIosIcon className="navArrow" />

          <div className="search-section">
            <SearchBar />
          </div>
        </div>


        {user ? <Profile user={user} onLogOut={handleLogOut} /> :
          <div className="authorize">
            <button className="loginbtn" onClick={handleLogIn} >Log in</button>
            <button className="loginbtn" onClick={handleSignUp} >Sign up</button>
          </div>}



      </div>
      <div className="main">
        <Artist />
        <Albums />
        <Albums />
        <Albums />
      </div>
    </div>
  );
}

export default MainContent;
