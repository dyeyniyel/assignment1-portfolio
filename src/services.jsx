import React from 'react';
import servicesimg1 from '../src/assets/data-analytics.jpg'
import servicesimg2 from '../src/assets/app-support.jpg'
import servicesimg3 from '../src/assets/soft-testing.jpg'
import servicesimg4 from '../src/assets/sys-admin.jpg'
import servicesimg5 from '../src/assets/soft-dev.jpg'
import servicesimg6 from '../src/assets/web-dev.jpg'

import './App.css';

const Services = () => {
    const services = [
        
                {
                    title: 'Data Analytics',
                    description: 'With my extensive experience in data analytics, I can offer services that help businesses make data-driven decisions. This could include creating data models, performing data analysis, and generating insightful reports.',
                    image: servicesimg1,
             
                },
                {
                    title: 'Application Support',
                    description: 'My experience in application support, particularly with AppDynamics, APM, or Splunk platforms, allows me to offer services in maintaining and improving application performance. This could involve troubleshooting issues, enhancing monitoring capabilities, and streamlining alerting processes.',
                    image: servicesimg2,

            
                },
                {
                    title: 'Software Testing',
                    description: 'My skills in functional, regression, and automation testing make me well-equipped to offer software testing services. This could involve creating test scenarios, conditions, and scripts, as well as working with development teams to troubleshoot issues.',
                    image: servicesimg3,

              
                },
                {
                    title: 'System Administration',
                    description: 'My knowledge of various platforms and technologies such as Linux systems allows me to offer system administration services. This could involve managing infrastructure lifecycle, implementing automation solutions, and maintaining role-based access controls.',
                    image: servicesimg4,

              
                },
                {
                    title: 'Software Development',
                    description: 'With my skills in programming technologies like C#, Java, SQL, I can offer software development services. This could range from developing new applications to improving existing ones.',
                    image: servicesimg5,

              
                },
                {
                    title: 'Web Development',
                    description: 'I offer end-to-end web development, from design to deployment, using technologies like HTML, CSS, JavaScript, Java, C#, SQL, React.js, Node.js, and Express.js. My focus is on creating responsive, user-friendly websites tailored to each client’s needs.',
                    image: servicesimg6,
       
                }
            ];
        
            return (
                <div className='services'>
                    <h2 className="page-title">Services</h2>
                    <div className="services-container">
                        {services.map((services, index) => (
                            <div className="services-item" key={index}>
                                <img  src={services.image} alt={`Services ${index + 1}`} />
                                <div className="services-details">
                                    <h3 style={{ textAlign: 'center', width: '100%', margin: 0, marginTop: 10 }}>{services.title}</h3>
                                    <p style={{ textAlign: 'center', marginTop: 10 }}>{services.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                   
                </div>
            );
        };
        

export default Services;
