import { Link } from 'react-router-dom';
import '../src/home.css'

export default function Home() {
	return <>

<section id="intro">
          <div className="homeIntro">
          <span className="homeHello">Hello there!</span><br/>
          <span className="introText">I am <span className="introName">Janiel Mark Javier</span> 

          <br/><br/><span className="jobTitle">Software Engineer</span></span>
		  <p className="mission-statement">
				<strong>Mission Statement:</strong> My mission is to leverage my skills and experiences 
				<br/> in software development to create impactful and user-friendly applications. 
				<br/> I am committed to continuous learning and growth, and strive to make a 
				<br/> positive difference in the tech industry.
			</p>
	 <Link className="get-to-know-me-link" to="/about">Get to know me!</Link>

          </div>
          
     </section>

	 </>
}