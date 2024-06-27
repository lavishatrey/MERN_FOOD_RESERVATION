import React from "react";
import { MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left" style={{ display: 'flex', alignItems: 'center' }}>
            <img className="logo" src="logo.svg" alt="logo" style={{ width: '90px', height: '80px', marginRight: '10px' }} />
            <span style={{ fontSize: '1.5em' }}>LAVISH EATS</span>
          </div>
          <div className="right" style={{ fontSize: '1.2em' }}>
            <p>
              <MdLocationOn style={{ marginRight: "8px" }} />
              DELHI, INDIA
            </p>
            <p>
              <MdAccessTime style={{ marginRight: "8px" }} />
              Open: 05:00 PM - 12:00 AM
            </p>
            <p>
              <MdPhone style={{ marginRight: "8px" }} />
              999-9999-9999
            </p>
          </div>
        </div>
        <div className="banner">
          <div className="right" style={{ fontSize: '1.2em' }}>
            <p>All Rights Reserved By Lavishatrey</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
