import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MessageSection from "./Pages/MessageSection";
import Services from "./Pages/Services";
import Signup from "./Components/Registration/SignUp/index";
import RoleSelection from "./Components/Registration/RoleSelection";
import SignIn from "./Components/Registration/SignIn/index";
import Navbar from "./Components/Navbar/Navbar";
import ServiceProviderDashboard from "./Components/Service Provider Dashboard/Dashboard";
import FreelancerProfile from "./Components/Review/FreelancerProfile";
import LandingPage from "./Pages/LandingPage";
import TrustSafety from "./Components/Rules/index";
import AddService from "./Components/Service Provider Dashboard/AddService";
import UpdateService from "./Components/Service Provider Dashboard/updateService";
import ServiceDetails from "./Components/Services/ServicesDetail";
import ProfilePage from "./Pages/PortfolioPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/rule" element={<TrustSafety />} />
        <Route path="/message" element={<MessageSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/addservice" element={<AddService />} />
        <Route path="/updateservice" element={<UpdateService />} />
        <Route path="/dashboard" element={<ServiceProviderDashboard />} />
        <Route path="/review" element={<FreelancerProfile />} />
        <Route path="/profile" element={<ProfilePage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;