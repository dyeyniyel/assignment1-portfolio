/*
File name: src/projects.jsx
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 05/31/2024
*/

import React from 'react';
import './App.css';
import './projects.css';
import projimg1 from '../src/assets/student-banking.jpg'
import projimg2 from '../src/assets/mobile-app.jpg'
import projimg3 from '../src/assets/react-portfolio.jpg'


//Projects component of the portfolio
const Project = () => {
    const projects = [

        {
            title: 'Student Banking Information',
            description: 'In this project, I designed and implemented a secure and user-friendly banking system specifically tailored for students. The system included simple features like withdraw, deposit, check balance and change PIN.',
            image: projimg1,
            role: 'Java Developer',
            tech: 'Java, Oracle SQL',
            outcome: 'The project was a success, with positive feedback from users on its ease of use and relevant features.'
     
        },
        {
            title: 'Mobile Quiz App',
            description: 'Led the development of an engaging and interactive quiz app on Android. The app featured a variety of topics and difficulty levels, incorporating a user-friendly interface to ensure a seamless and enjoyable user experience.',
            image: projimg2,
            role: 'Mobile Developer',
            tech: 'Kotlin, Android Studio',
            outcome: 'The app was well-received, with high download rates and positive user reviews. It also increased user engagement and retention, achieving the project’s main objectives'
    
        },
        {
            title: 'React Portfolio Website',
            description: 'Built a personal portfolio website using React. The website showcased my projects, skills, services, and experiences. The website featured a responsive design, making it accessible and visually appealing on a variety of devices.',
            image: projimg3,
            role: 'Full Stack Developer',
            tech: 'React.js, HTML, CSS',
            outcome: 'The website effectively showcased my work and attracted freelance job offers. It also served as a practical demonstration of my React skills, contributing to my professional growth.'
      
        }
    ];


    //rendering projects component     
    return (
        <div className='project'>
            <h2 className="page-title">Projects</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-item" key={index}>
                        <img  src={project.image} alt={`Project ${index + 1}`} />
                        <div className="project-details">
                            <h3 style={{ textAlign: 'center', width: '100%', margin: 0, marginTop: 30 }}>{project.title}</h3>
                            <p style={{ textAlign: 'center', marginTop: 30 }}>{project.description}</p>
                            <p style={{ marginTop: 40 }}><strong>Role:</strong> {project.role}</p>
                            <p><strong>Technologies Used:</strong> {project.tech}</p>
                            <p><strong>Outcome:</strong> {project.outcome}</p>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default Project;
