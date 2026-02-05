import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/login/Login';
import CreateAccount from './pages/createAccount/CreateAccount';
import PageRequest from './pages/pageRequest/PageRequest';
import PageRefund from './pages/pageRefund/PageRefund';
import PageAnalysis from './pages/pageAnalysis/PageAnalysis';

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/refund" element={<PageRefund />} />
          <Route path="/request" element={<PageRequest />} />
          <Route path="/analysis" element={<PageAnalysis />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
