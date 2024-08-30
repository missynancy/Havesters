import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import JobApplications from './dashboard/JobApplication';
import Notification from './dashboard/Notification';
import Login from './components/Login';
import Register from './components/Register';
import JobApplicationPage from './dashboard/JobApplicationPage';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/applications" element={<JobApplications />} />
          <Route path="/apply/:jobId" element={<JobApplicationPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
