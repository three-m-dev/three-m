import { BlogPost, Footer, Navbar } from '../components';

const BulletinPost = () => {
	return (
		<>
			<Navbar />
			<div className="mt-16">
				<BlogPost />
				<Footer />
			</div>
		</>
	);
};

export default BulletinPost;
