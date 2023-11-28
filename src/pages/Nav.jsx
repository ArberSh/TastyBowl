import React, { useState } from "react";
import Logo from "../assets/TastyBowl.png";
import "./Nav.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Nav() {
  const [input, setInput] = useState("");

  const Click = (e) => {
    console.log(input);
  };
  return (
    <nav style={{position: 'absolute', top: '0px', width:'100%'}}>
      <div className="nav_bar">
        <div className="Nav__Left">
          <figure>
            <Link to="/">
              <img className="logo" src={Logo}></img>
            </Link>
          </figure>
        </div>
        <div className="Nav__Right">
          <div className="Nav_Icons">
            <a href="#">
              <div className="Nav_Icon">
                <InstagramIcon />
              </div>
            </a>
            <a href="#">
              <div className="Nav_Icon">
                <TwitterIcon />
              </div>
            </a>
            <a href="#">
              <div className="Nav_Icon">
                <FacebookIcon />
              </div>
            </a>
          </div>
          <div className="Nav_SearchBar">
            <input
              className="SearchBox"
              placeholder="Search for a recipe"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button className="SearchLogo" color="secondary" onClick={Click}>
              <SearchIcon fontSize="medium" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
