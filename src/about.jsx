/*
File name: src/about.jsx
Student Name: Janiel Mark Javier
Student ID: 301379377
Date: 05/31/2024
*/

import './App.css';
import './about.css';

//About Me component
export default function About() {
    return (
        <>
            <h2 className="page-title">About Me</h2>
            <div className='contact-container'>
                <div className='about'>
                    <p>
                        <img src="https://media.licdn.com/dms/image/C5603AQEhcm_kQ_UjFQ/profile-displayphoto-shrink_800_800/0/1658067309410?e=2147483647&v=beta&t=ouMGiL1XpcKN5_rnMwlloyI2SLUiXM8bUaVJeHXvDQQ" alt="" />
                        Hello! My name is Janiel Mark Javier.
                    </p>
                    <br></br>
                    <p>
                        An IT industry professional, with extensive experience in programming, application support, data analytics, software testing and system administration.
                    </p>
                    <br></br>
                    <p>
                        Currently a student of Centennial College under the Software Engineering Technology program (Fast-track)
                    </p>
                    <br></br>
                    <p>
                        Are you interested in learning more about me? Check out my <a href="https://drive.google.com/file/d/1lzYX5qQoIjEohQWgNbzIKQlYMVbXGtdg/edit" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>.
                    </p>
                </div>

            </div>
        </>
    )
}