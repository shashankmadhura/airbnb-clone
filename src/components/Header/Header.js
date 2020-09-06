import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="header">
      <img
        className="header__logo"
        alt="logo"
        src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/airbnb_logo.png"
        onClick={() => history.push("/")}
      />
      <div className="header__center">
        <input placeholder="Start your search"></input>
        <SearchIcon />
      </div>

      <div className="header__right">
        <h3>Become a host</h3>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
