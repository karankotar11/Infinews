import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>InfiNews</h5>
            <p>Your daily dose of news.</p>
          </div>
          <div className="col-md-6 text-md-right">
            <Link to="/home" className="text-light mx-2">Home</Link>
            <Link to="/about" className="text-light mx-2">About</Link>
            <Link to="/contact" className="text-light mx-2">Contact</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} InfiNews. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
