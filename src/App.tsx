import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from './pages/Layout';
import Contacts from './pages/Contacts';
import Charts from './pages/Charts';


function App() {
  return (
      <div>
      <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/contacts" />} />
              <Route path="/contacts" element={<Layout><Contacts/></Layout>} />
              <Route path="/charts" element={<Layout><Charts/></Layout>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
