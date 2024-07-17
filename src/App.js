import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import WelcomePage from './components/WelcomePage';
import GPA from './components/GPA';
import FinalGrade from './components/FinalGrade';
import Register from './components/Register';
import Login from './components/Login';
import NeededGrade from './components/NeededGrade';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route 
            path="/GPA" 
            element={user ? <GPA /> : <Navigate to="/register" />} 
          />
          <Route 
            path="/FinalGrade" 
            element={user ? <FinalGrade /> : <Navigate to="/register" />} 
          />
          <Route 
            path="/NeededGrade" 
            element={user ? <NeededGrade /> : <Navigate to="/register" />} 
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<WelcomePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;