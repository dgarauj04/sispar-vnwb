import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Refund from './components/refund/Refund';
import Request from './components/request/Request';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profile/Profile';

export default function AppRoutes() {
   const PageWithSidebar = ({ Component }) => (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <Component />
      </main>
    </div>
  ); 

  return (
    <>
    <BrowserRouter>  
     <Routes>
     <Route path="/login" element={<Login />} />

     <Route path="/refund" element={<PageWithSidebar Component={Refund} />} />
     <Route path="/request" element={<PageWithSidebar Component={Request} />} />

     <Route path="/profile" element={<PageWithSidebar Component={Profile} />} />
     </Routes>
    </BrowserRouter>
    
    </>
  );
}
