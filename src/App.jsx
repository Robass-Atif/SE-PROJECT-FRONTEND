import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";
import RoleSelection from "./Components/Registration/RoleSelection";
import Signup from "./Components/Registration/SignUp/index";
import SignIn from "./Components/Registration/SignIn/index";
import TrustSafety from "./Components/Rules/index";
import MessageSection from "./Pages/MessageSection";
import Services from "./Pages/Services";
import AddService from "./Components/Service Provider Dashboard/AddService";
import UpdateService from "./Components/Service Provider Dashboard/updateService";
import ServiceDetails from "./Components/Services/ServicesDetail";
import ServiceProviderDashboard from "./Components/Service Provider Dashboard/Dashboard";
import FreelancerProfile from "./Components/Review/FreelancerProfile";
import ProfileRoutes from "./Components/Routes/ProfileRoutes";
import SettingsRoutes from "./Components/Routes/SettingsRoutes";
import EditProfile from "./Components/Profile/EditProfile";

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
        <Route path="/profile/*" element={<ProfileRoutes />} />
        <Route path="/settings/*" element={<SettingsRoutes />} />
        <Route path="/editprofile" element={<EditProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
