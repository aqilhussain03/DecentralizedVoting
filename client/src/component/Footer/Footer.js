import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/aqilhussain03/DecentralizedVoting"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made with 💛 by{" "}          
          <a
            className="profile"
            href="https://www.instagram.com/_azxxz.___/"
            target="_blank"
            rel="noopener noreferrer"
          >
           | ABDUL AZEEZ 21IT01 |
          </a>
          <a
            className="profile"
            href="https://www.instagram.com/e_rik___/"
            target="_blank"
            rel="noopener noreferrer"
          >
           | AHAMED SIDDIQ 21IT11 |
          </a>
          <a
            className="profile"
            href="https://www.instagram.com/aqil.hussain03/"
            target="_blank"
            rel="noopener noreferrer"
          >
           | AQIL HUSSAIN 21IT17 |              
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
