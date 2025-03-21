import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import PageRequest from './pages/pageRequest/PageRequest';
import PageRefund from './pages/pageRefund/PageRefund';

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/refund" element={<PageRefund />} />
            <Route path="/request" element={<PageRequest />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
