import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Components/Robass/profile";
import Rule from "./Components/Robass/rule";
import MessageSection from "./Pages/MessageSection";
import Services from "./Pages/Services";
import SignUp from "./Components/Registration/SignUp/index";
import RoleSelection from "./Components/Registration/RoleSelection/index";
import SignIn from "./Components/Registration/SignIn/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup/role-selection" element={<RoleSelection />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/message" element={<MessageSection />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
