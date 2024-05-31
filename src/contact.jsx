/*
File name: src/contact.jsx
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 05/31/2024
*/

import React, { useState } from 'react';
import './App.css';
import './contact.css';


//Contact Me component of the portfolio
const Contact = () => {

    //using useState hook for form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    //handling form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //function to handle submission
    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert('Form submitted successfully. Thank you for contacting me!'); // popup message displayed after submission
        window.location.href = '/'; //once submitted, redirected to homepage
    };
    

    //rendering contact component
    return (
        <>
        <h2 className="page-title">Contact Me</h2>
        <div className='contact-container'>
            <div className='box contact-info'>
                <h2>My Contact Information:</h2>
                <p>
                    <strong>Address:</strong> Centennial College<br />
                    <br></br>
                    <strong>Email:</strong> jjavie27@my.centennialcollege.ca<br />
                    <br></br>
                    <strong>Phone:</strong> +1 (437) 992-0825<br />
                </p>
            </div>

            <div className='box' style={{ flex: 1 }}>
                <h2>Contact Form:</h2>
                 <form onSubmit={handleSubmit}>
                <div className="input-container">
                        <label htmlFor="firstName">First Name:</label>        
                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            
                    </div>

                    <div className="input-container">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="contactNumber">Contact #:</label>
                        <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                    </div>

                    <div className="input-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Contact;
