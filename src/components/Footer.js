import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

    const Footer = () => (
        <footer className="fixed-bottom bg-dark">
            <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <Link to="/" className="nav-link">Home</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/even-clicks" className="nav-link">Even Clicks</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/hide-me" className="nav-link">Hide Me</Link>
                </Nav.Item>
            </Nav>            
        </footer>    
    );

    export default Footer;
