import { BlogGrid, Footer, Navbar, NewsletterSignup } from '../components';

const Bulletin = () => {
	return (
		<>
			<Navbar />
			<div className="mt-16">
				<BlogGrid />
				<NewsletterSignup />
				<Footer />
			</div>
		</>
	);
};

export default Bulletin;
