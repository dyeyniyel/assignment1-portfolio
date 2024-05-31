/*
File name: MainRouter.jsx
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 05/31/2024
*/

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './src/App.css'
import Layout from './components/Layout';
import Footer from './components/Footer';
import About from './src/about';
import Contact from './src/contact';
import Project from './src/projects';
import Services from './src/services';


const MainRouter = () => {
    return (
        <>
            <Layout/>
                <div className="main-body">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route exact path="/projects" element={<Project/>}/>
                    <Route exact path="/services" element={<Services/>}/>
                </Routes>
                </div>
            <Footer/>
        </>

    );
};

export default MainRouter;