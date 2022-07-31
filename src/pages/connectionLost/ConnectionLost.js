import React from "react";
import "./connectionlost.css";
import connectionErrorIcon from "../../assets/icons/connection-error.png";

function s() {
  return (
    <div className="">
      <div className="centerItems no_connection_img">
        <img src={connectionErrorIcon} alt="connection Lost" />
      </div>
      <p className="text-center no_connection_text">
        No Internet Connection. <br></br>Please try again later
      </p>

      <p className="text-center">
        Click Here to {" "}
        <u style={{color:"#1a237e", fontWeight:"bold"}} onClick={() => window.location.reload()}> Refresh Page</u>
      </p>
    </div>
  );
}

export default s;
