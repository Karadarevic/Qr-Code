import React from "react";
import "./App.css";
import qrcode from "./image-qr-code.png";

export default () => {
  return (
    <div className="fullbox">
      <div className="center">
        <img className="qrcode" src={qrcode} />
        <p className="main">
          Improve your front-end skills by building projects
        </p>
        <p className="instruction">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};
