import React from "react";
import logo from "../assets/spotifylogo.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="flex justify-center bg-pink-900 p-9">
      <div className="items-center flex-shrink-0 mr-6">
        <Link to="/">
          <img src={logo} alt="Spotify" className="h-12" />
        </Link>
      </div>
    </nav>
  );
};

export default Footer;
