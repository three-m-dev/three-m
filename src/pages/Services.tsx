import { FAQs, Footer, Navbar, Standards } from '../components';

const Services = () => {
	return (
		<>
			<Navbar />
			<div className="mt-16">
				<Standards />
				<FAQs />
				<Footer />
			</div>
		</>
	);
};

export default Services;
