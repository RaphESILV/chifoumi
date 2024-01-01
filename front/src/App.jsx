import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ajout de la route pour la page de connexion */}
        <Route path="/register" element={<Register />} /> {/* Correction faite ici */}
        {/* Autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
