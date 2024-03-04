import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	About,
	Bulletin,
	BulletinManager,
	BulletinPost,
	CareerManager,
	Careers,
	Contact,
	Home,
	Login,
	NotFound,
	Services,
} from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/careers" element={<Careers />} />
				<Route path="/bulletin" element={<Bulletin />} />
				<Route path="/bulletin/*" element={<BulletinPost />} />
				<Route path="/contact" element={<Contact />} />

				<Route path="/dashboard/login" element={<Login />} />
				<Route path="/dashboard/careers" element={<CareerManager />} />
				<Route path="/dashboard/bulletin" element={<BulletinManager />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
