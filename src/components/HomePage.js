import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

function HomePage() {
  return (
    <div className="tri-card">
      <div className="link-container">
        <img className="image-card" src="https://hips.hearstapps.com/roa.h-cdn.co/assets/17/13/1490615777-bugatti.gif" alt="img1" />
        <Link className= "text" to="/hypercar"> Hyper Cars</Link>
      </div>
      <div className="link-container">
        <img className="image-card" src="https://64.media.tumblr.com/5475f1b5a8033a446b926bd1baf7520e/tumblr_o8mz97ROdj1qaf5eeo3_400.gifv" alt="img2" />
        <Link className= "text" to="/sportycar"> Sport Cars</Link>
      </div>
      <div className="link-container">
        <img className="image-card" src="https://pro2-bar-s3-cdn-cf3.myportfolio.com/989d3232-61d6-48dd-9b88-e91cf11ad809/495b022a-d18c-47b2-840e-b21134f3c2be_rw_3840.jpg?h=4aa981c4babf8a01a8da02248716a758" alt="img3"/>
        <Link className= "text" to="/mommycar"> Mommy's Cars</Link>
      </div>
      <footer className="footer">
        <h1> Welcome to Zroom!</h1>
      </footer>
    </div>
  );
}

export default HomePage;
