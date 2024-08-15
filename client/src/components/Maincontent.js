import React from "react";
import "../maincontentstyles.css";
import Artist from "./Artists";
import Albums from "./Albums";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router-dom";


function MainContent() {

  const navigate = useNavigate();



  function handleSignUp(){
     navigate("/auth/spotify");
  }
  function handleLogIn(){
    navigate("/auth/spotify");
 }
  return (
    <div>
      <div className="navbar">
        <div className="navArea">
        <ArrowBackIosIcon  className="navArrow" />
        <ArrowForwardIosIcon className="navArrow" />
        </div>

        <div className="authorize">
          <button className="signupbtn" onClick={handleSignUp} >Sign up</button>
          <button className="loginbtn"onClick={handleLogIn} >Log in</button>

        </div>

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
