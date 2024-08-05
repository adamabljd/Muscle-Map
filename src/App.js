import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ExercisePage from './pages/ExercisePage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/exercise/:title" element={<ExercisePage />} />
      </Routes>
    </Router>
  );
}

export default App;
