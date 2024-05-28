
import React from 'react'
import {Link} from 'react-router-dom'
import '../src/App.css';
import logo from '../src/assets/logoJ.jpg'

export default function Layout() {
    return (
        <>
            <header className="header">
            <a href="/">
            <img src={logo} alt="Logo" className="logo" />
            </a>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact Me</Link>
                </nav>
            </header>
        </>
    );
}