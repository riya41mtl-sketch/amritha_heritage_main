import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import HeritageLoader from '../layouts/HeritageLoader';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Accommodation = lazy(() => import('../pages/Accommodation'));
const Destination = lazy(() => import('../pages/Destination'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Blog = lazy(() => import('../pages/Blog'));
const ContactPage = lazy(() => import('../pages/ContactPage'));

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<HeritageLoader isLoading={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="rooms" element={<Accommodation />} />
            <Route path="destination" element={<Destination />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
