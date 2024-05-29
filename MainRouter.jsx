import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './src/App.css'
import Layout from './components/Layout';
import Footer from './components/Footer';
import About from './src/about';
import Contact from './src/contact';
import Project from './src/projects';


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
                </Routes>
                </div>
            <Footer/>
        </>

    );
};

export default MainRouter;