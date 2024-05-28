import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<h1 className="welcome-text">Hello there! Welcome to my page</h1>
			<p className="portfolio-intro">This is my personal portfolio website. Feel free to explore!</p>
			<p className="mission-statement">
				<strong>Mission Statement:</strong> My mission is to leverage my skills and experiences in software development to create impactful and user-friendly applications. I am committed to continuous learning and growth, and strive to make a positive difference in the tech industry.
			</p>
			<Link className="get-to-know-me-link" to="/about">Get to know me!</Link>
		</>

	)
}