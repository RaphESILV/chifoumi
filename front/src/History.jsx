import React, { useEffect, useState } from 'react';
import CustomButtonMenu from './components/CustomButtonMenu';

const History = ({ games, addGame }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const gamesPerPage = 6;

    //useeffect qui recupere les valeur en fin de partie et les sauvegarde pour history.jsx
    useEffect(() => {
        const username = localStorage.getItem('username');
        const score = localStorage.getItem('score');
        const time = localStorage.getItem('time');
        const winner = localStorage.getItem('winner');
        const player_1 = localStorage.getItem('player_1');
        const player_2 = localStorage.getItem('player_2');
        addGame(player_1, player_2, score, time, winner);
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