import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Components/Robass/profile';
import Rule from './Components/Robass/rule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/rule" element={<Rule />} />
      </Routes>
    </Router>
  );
}

export default App;
