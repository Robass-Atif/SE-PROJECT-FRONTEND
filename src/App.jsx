import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";
import RoleSelection from "./Components/Registration/RoleSelection";
import Signup from "./Components/Registration/SignUp/index";
import SignIn from "./Components/Registration/SignIn/index";
import TrustSafety from "./Components/Rules/index";
import ChatSection from "./Pages/MessageSection";
import Services from "./Pages/Services";
import AddService from "./Components/Service Provider Dashboard/AddService";
import UpdateService from "./Components/Service Provider Dashboard/updateService";
import ServiceDetails from "./Components/Services/ServicesDetail";
import ServiceProviderDashboard from "./Components/Service Provider Dashboard/Dashboard";
import FreelancerProfile from "./Components/Review/FreelancerProfile";
import ProfileRoutes from "./Components/Routes/ProfileRoutes";
import SettingsRoutes from "./Components/Routes/SettingsRoutes";
import EditProfile from "./Components/Profile/EditProfile";
import ManageServices from "./Components/Service Provider Dashboard/ManageServices";
import EditService from "./Components/Service Provider Dashboard/EditService";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OTP from "./Components/OTP/index";
import PrivateRoutes from "./Pages/PrivateRoutes";
import BuyerDashboard from "./Components/Buyer Dashboard/BuyerDashboard";
import { useSelector } from "react-redux";
import Jazzcash from "./Components/JazzcashPayment/Jazzcash";
import SuccessPage from "./Components/JazzcashPayment/SuccessPage";

function App() {
  const queryClient = new QueryClient();
  const { currentUser } = useSelector((state) => state.user); // Fetch current user state

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/OTP"
            element={currentUser ? <Navigate to="/" /> : <OTP />}
          />
          <Route
            path="/role-selection"
            element={currentUser ? <Navigate to="/" /> : <RoleSelection />}
          />

          {/* Redirect to home page if user is logged in */}
          <Route
            path="/signup"
            element={currentUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/signin"
            element={currentUser ? <Navigate to="/" /> : <SignIn />}
          />

          {/* Protected routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/rule" element={<TrustSafety />} />
            <Route path="/message/" element={<ChatSection />} />
            <Route path="/message/*" element={<ChatSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service-details/:id" element={<ServiceDetails />} />
            <Route path="/addservice" element={<AddService />} />
            <Route path="/updateservice" element={<UpdateService />} />
            <Route path="/dashboard" element={<ServiceProviderDashboard />} />
            <Route path="/user/dashboard" element={<BuyerDashboard />} />
            <Route path="/review" element={<FreelancerProfile />} />
            <Route path="/profile/*" element={<ProfileRoutes />} />
            <Route path="/settings/*" element={<SettingsRoutes />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/manage-services" element={<ManageServices />} />
            <Route path="/edit-service" element={<EditService />} />
            <Route path="/payment" element={<Jazzcash />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
