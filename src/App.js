// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Survey from './components/Survey';
import GameSelection from './components/GameSelection';
import Results from './components/Results';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import SDGGame from './components/games/SDGGame';
import Learn from './components/games/Learn';
import Quiz from './components/games/Quiz';
import SDG4 from './components/games/SDG4';
import SDG8 from './components/games/SDG8';
import SDG12 from './components/games/SDG12';
import SDG16 from './components/games/SDG16';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/survey" element={<ProtectedRoute><Survey /></ProtectedRoute>} />
        <Route path="/games" element={<ProtectedRoute><GameSelection /></ProtectedRoute>} />
        <Route path="/results" element={<ProtectedRoute><Results /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/games/learn/:sdgId" element={<ProtectedRoute><Learn /></ProtectedRoute>} />
        <Route path="/games/quiz/:sdgId" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/games/sdgGame/:sdgId" element={<ProtectedRoute><SDGGame /></ProtectedRoute>} />
        <Route path="/games/SDG4" element={<ProtectedRoute><SDG4 /></ProtectedRoute>} />
        <Route path="/games/SDG8" element={<ProtectedRoute><SDG8 /></ProtectedRoute>} />
        <Route path="/games/SDG12" element={<ProtectedRoute><SDG12 /></ProtectedRoute>} />
        <Route path="/games/SDG16" element={<ProtectedRoute><SDG16 /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
