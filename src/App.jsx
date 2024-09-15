import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Components/Robass/profile';
import Rule from './Components/Robass/rule';
import MessageSection from './Pages/MessageSection';
import Services from './Pages/Services';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/message" element={<MessageSection />} />
        <Route path="/services" element={<Services />} />


      </Routes>
    </Router>
  );
}

export default App;
