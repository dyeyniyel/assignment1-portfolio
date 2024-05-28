import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './src/App.css'
import Layout from './components/Layout';
import Footer from './components/Footer';



const MainRouter = () => {
    return (
        <>
            <Layout/>
                <div className="main-body">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                </Routes>
                </div>
            <Footer/>
        </>

    );
};

export default MainRouter;