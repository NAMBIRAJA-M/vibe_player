import React from "react";
import SpaIcon from "@mui/icons-material/Spa";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
function Navbar() {
  const Langbtnicon = {
    fontSize: "1.7rem",
    backgroundColor: "#151515",
    padding: "0.1rem",
    position: "relative",
    top: "8px",
    fill: "white",
  };

  return (
    <div>
      <div className="bgcdiv">
        <div className="section-container">
          <div className="logo">
            <a href="#logo">
              <SpaIcon className="navicons" />
              VibePlayer
            </a>
          </div>
          <a href="#home">
            {" "}
            <HomeOutlinedIcon className="navicons" /> Home
          </a>
          <a href="#Search" style={{ paddingBottom: "1.8rem" }}>
            <SearchIcon className="navicons" /> Search
          </a>
        </div>
      </div>
      <div className="section-container">
        <div className="section-heading">
          <a>
            <LibraryMusicIcon className="navicons" /> Your Library
          </a>
          <p>
            <AddIcon className="navicons" />{" "}
          </p>
        </div>
        <div className="section-content-container">
          <div className="section-content" style={{ marginBottom: "2rem" }}>
            <p>Create Your First PlayList</p>
            <p style={{ color: "#7d7c7c" }}>it's easy, we'll help you</p>
            <button className="createbtn">Create Playlist</button>
          </div>
          <div className="section-content">
            <p>Let's Find Some Podcasts To Follow</p>
            <p style={{ color: "#7d7c7c" }}>
              We'll keep you updated on new episodes
            </p>
            <button className="createbtn">Browse Podcasts</button>
          </div>
        </div>
        <div className="navbarInfo">
          <p>Legal</p>
          <p>Safety And Privacy Centre</p>
          <p>Privacy Policies</p>
          <p>Cookies</p>
          <p>About Ads</p>
          <p>Accessibility</p>
        </div>
        <button className="createbtn langbtn">
          <LanguageIcon style={Langbtnicon} /> English
        </button>
      </div>
    </div>
  );
}

export default Navbar;
