/*
File name: components/Layout.jsx
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 05/31/2024
*/

import React from 'react'
import {Link} from 'react-router-dom'
import '../src/App.css';
import logo from '../src/assets/logoJ.jpg'


//Layout compoenent for links to different pages
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
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact Me</Link>
                </nav>
            </header>
        </>
    );
}