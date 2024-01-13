import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import Menu from './Menu';
import History from './History';
import FindGame from './FindGame';
import Game from './Game';
import Online from './Online';
import FindGameOnline from './FindGameOnline';

function App() {
  const [games, setGames] = useState([]);

  const addGame = (player_1, player_2, score, time, winner) => {
    const game = { player_1, player_2, score, time, winner };
    setGames([...games, game]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/history" element={<History games={games} addGame={addGame} />} />
        <Route path="/findGame" element={<FindGame />} />
        <Route path="/FindGameOnline" element={<FindGameOnline />} />
        <Route path="/game" element={<Game games={games} addGame={addGame} />} />
        <Route path="/online" element={<Online />} />
      </Routes>
    </Router>
  );
}

export default App;