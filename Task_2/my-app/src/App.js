import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/layout/Layout';
import { Home } from './pages/home/Home';
import { Pricing } from './pages/pricing/Pricing';
import { ContactUs } from './pages/contact-us/Contact-us';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Layout/>}>
        <Route
          index
          element={<Home/>}></Route>
        <Route
          path="pricing"
          element={<Pricing/>}></Route>
        <Route
          path="contact-us"
          element={<ContactUs/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
