import React, { useState, useEffect } from 'react';
import CustomButtonMenu from './components/CustomButtonMenu';

const History = () => {
    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 6;

    const addGame = (player_1, player_2, score, time, winner) => {
        setGames(prevGames => [...prevGames, { player_1, player_2, score, time, winner }]);
    };

    useEffect(() => {
        addGame('Player 1', 'Player 2', '1-0', '10 min', 'Player 1');
        // Add more games here for testing
    }, []);

    // Get current games
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="blockHistory">
            <h1>Game History</h1>
            <table className="gameTable text-none">
                <thead>
                    <tr>
                        <th className="text-none">Game</th>
                        <th className="text-none">Player 1</th>
                        <th className="text-none">Player 2</th>
                        <th className="text-none">Score</th>
                        <th className="text-none">Time</th>
                        <th className="text-none">Winner</th>
                    </tr>
                </thead>
                <tbody>
                    {currentGames.map((game, index) => (
                        <tr key={index}>
                            <td>{(currentPage - 1) * gamesPerPage + index + 1}</td>
                            <td>{game.player_1}</td>
                            <td>{game.player_2}</td>
                            <td>{game.score}</td>
                            <td>{game.time}</td>
                            <td>{game.winner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="button-container">
                <CustomButtonMenu onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</CustomButtonMenu>
                <CustomButtonMenu onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(games.length / gamesPerPage)}>Next</CustomButtonMenu>
                <CustomButtonMenu to='/menu' className="text-none">{'Return'}</CustomButtonMenu>
            </div>
        </div>
    );
};

export default History;