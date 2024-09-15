import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Robass/profile";
import Rule from "./Components/Robass/rule";
import MessageSection from "./Pages/MessageSection";
import Services from "./Pages/Services";
import Signup from "./Components/Registration/SignUp";
import RoleSelection from "./Components/Registration/RoleSelection";
import SignIn from "./Components/Registration/SignIn/SignIn";
import Navbar from "./Components/Navbar";

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="signup/role-selection" element={<RoleSelection />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/message" element={<MessageSection />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
