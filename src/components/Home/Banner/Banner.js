import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";
import Datepicker from "../Datepicker/Datepicker";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const [showDate, setShowDate] = useState(false);
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__datepicker">
        {showDate && <Datepicker />}
        <Button
          onClick={() => setShowDate(!showDate)}
          variant="outlined"
          className="banner__searchbutton"
        >
          {showDate ? "Hide" : "Show Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Go Near</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
