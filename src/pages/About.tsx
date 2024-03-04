import { Footer, Banner, Navbar, Stats } from '../components';

const About = () => {
	return (
		<>
			<Navbar />
			<div className="mt-16">
				<Banner />
				<Stats />
				<Footer />
			</div>
		</>
	);
};

export default About;
