import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/ProfileSection/profile";
import MessageSection from "./Pages/MessageSection";
import Services from "./Pages/Services";
import Signup from "./Components/Registration/SignUp";
import RoleSelection from "./Components/Registration/RoleSelection";
import SignIn from "./Components/Registration/SignIn/SignIn";
import Navbar from "./Components/Navbar/Navbar"
import ServiceProviderDashboard from "./Components/Service Provider Dashboard/Dashboard";
import FreelancerProfile from "./Components/Review/FreelancerProfile";
import EditProfile from "./Components/ProfileSection/editprofile";
import LandingPage from "./Pages/LandingPage";

import TrustSafety from "./Components/Rules/index";

import AddService from "./Components/Service Provider Dashboard/AddService";
import UpdateService from "./Components/Service Provider Dashboard/updateService";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/" element={<RoleSelection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/rule" element={<TrustSafety />} />
        <Route path="/message" element={<MessageSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/addservice" element={<AddService/>} />
        <Route path="/updateservice" element={<UpdateService/>} />
        <Route path="/dashboard" element={<ServiceProviderDashboard />} />
        <Route path="/review" element={<FreelancerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
