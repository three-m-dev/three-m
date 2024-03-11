import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  About,
  Blog,
  BulletinManager,
  BulletinPost,
  CareerManager,
  Careers,
  Contact,
  Home,
  Login,
  NotFound,
  PrivacyPolicy,
  Services,
} from './pages';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/services/*'
          element={<Services />}
        />
        <Route
          path='/careers/*'
          element={<Careers />}
        />
        <Route
          path='/bulletin'
          element={<Blog />}
        />
        <Route
          path='/bulletin/*'
          element={<BulletinPost />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />

        <Route
          path='/dashboard/login'
          element={<Login />}
        />
        <Route
          path='/dashboard/careers'
          element={<CareerManager />}
        />
        <Route
          path='/dashboard/bulletin'
          element={<BulletinManager />}
        />

        <Route
          path='/privacy-policy'
          element={<PrivacyPolicy />}
        />

        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
