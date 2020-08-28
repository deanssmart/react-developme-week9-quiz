import React from "react";

import { Link } from "react-router-dom";

    const Footer = () => (
        <footer className="fixed-bottom bg-dark">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/even-clicks" className="nav-link">Even Clicks</Link>
                </li>
                <li className="nav-item">
                    <Link to="/hide-me" className="nav-link">Hide Me</Link>
                </li>
            </ul>
        </footer>    
    );

    export default Footer;