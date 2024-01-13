import React, { useState, useEffect, useCallback } from 'react';
import MapGame from './jpg/map.jpg';
import CustomButtonReturn from './components/CustomButtonReturn';
import Card from './Card';
import CustomButtonCard from './components/CustomButtonCard';
import Ciseaux from './jpg/ChifoumiCiseaux.jpg';
import Pierre from './jpg/ChifoumiPierre.jpg';
import Feuille from './jpg/ChifoumiPapier.jpg';
import BackCard from './jpg/BackCard.jpg';
import Versus from './svg/Vs.svg';

function Game({ addGame }) {
    const [showAlert, setShowAlert] = useState(false);
    const [result, setResult] = useState('');
    const [isGameActive, setIsGameActive] = useState(true);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [playerChoice, setPlayerChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [round, setRound] = useState(1);
    const [time, setTime] = useState(0);
    const [player1, setPlayer1] = useState('');
    const choices = ['Pierre', 'Papier', 'Ciseaux'];
    const [games, setGames] = useState([]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => {
        const username = localStorage.getItem('username');
        setPlayer1(username);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (isGameActive) {
                setTime(prevTime => prevTime + 1); 
            } else {
                clearInterval(timer); 
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [isGameActive]);

    const calculateResult = useCallback((playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            setResult("It's a tie!");
        } else if (
            (playerChoice === 'Pierre' && computerChoice === 'Ciseaux') ||
            (playerChoice === 'Ciseaux' && computerChoice === 'Papier') ||
            (playerChoice === 'Papier' && computerChoice === 'Pierre')
        ) {
            setResult('You win!');
            setPlayerScore(score => score + 1);
        } else {
            setResult('You lose!');
            setComputerScore(score => score + 1);
        }
    }, []);

    const handleChoice = useCallback((choice) => {
        if (!isGameActive) return;

        setPlayerChoice(choice);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
        calculateResult(choice, randomChoice);
        setRound(r => r + 1);
    }, [isGameActive, choices, calculateResult]);

    const saveEndGameData = async () => {
        const endGameData = {
            user1: {
                _id: player1._id,
                username: player1.username,
            },
            user2: null, // or the data for the second user if it exists
            turns: [], // or the data for the turns if it exists
            time: formatTime(time), // add the time here
        }

        // Your code for saving end game data here

    };

    useEffect(() => {
        if (playerScore === 3 || computerScore === 3) {
            setIsGameActive(false);
            setResult(playerScore === 3 ? 'Player wins the game!' : 'Computer wins the game!');
            setShowAlert(true);
            saveEndGameData(); // Save end game data when game is not active
        }
    }, [playerScore, computerScore]);
    useEffect(() => {
        if (!isGameActive && round > 0) { // Check if the game has ended
            const newGame = {
                player_1: player1,
                player_2: 'Computer',
                score: `${playerScore}-${computerScore}`,
                time: formatTime(time),
                winner: playerScore > computerScore ? 'Player' : 'Computer'
            };
            setGames(oldGames => [...oldGames, newGame]);
        }
    }, [isGameActive, round, player1, playerScore, computerScore, time]);
    
    return (
        <div>
            <div>
                {showAlert && (
                    <div className="alert-background">
                        <div className="alert">
                            {result}
                            <CustomButtonReturn to='/menu' onClick={() => setShowAlert(false)}>Returns</CustomButtonReturn>
                        </div>
                    </div>
                )}
            </div>
            <div style={{ backgroundImage: `url(${MapGame})` }} className="fondGame">
                <div className='blockGame'>
                    <div className="score">
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan="12" style={{ textAlign: 'center' }}>Round: {round}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2">{player1}</td>
                                    <td colSpan="2">{playerChoice}</td>
                                    <td colSpan="2">{playerScore}</td>
                                    <td style={{ textAlign: 'center', border: 'none' }}><img src={Versus} style={{ width: '60px', height: '70px' }} /></td>
                                    <td colSpan="2">{computerScore}</td>
                                    <td colSpan="2">Computer</td>
                                    <td colSpan="2">{computerChoice}</td>
                                </tr>
                                <tr>
                                    <td colSpan="10" style={{ textAlign: 'center' }}>Result: {result}</td>
                                    <td colSpan="12" style={{ textAlign: 'center' }}> Time: {formatTime(time)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {isGameActive ? (
                    <div className="MyCard">
                        <CustomButtonCard image={Ciseaux} onClick={handleChoice} choice='Ciseaux' />
                        <CustomButtonCard image={Pierre} onClick={handleChoice} choice='Pierre' />
                        <CustomButtonCard image={Feuille} onClick={handleChoice} choice='Papier' />
                    </div>

                ) : null}
                <div className="TCard">
                    <Card frontImage={BackCard} backImage={Ciseaux} shouldFlip={computerChoice === 'Ciseaux'} />
                    <Card frontImage={BackCard} backImage={Pierre} shouldFlip={computerChoice === 'Pierre'} />
                    <Card frontImage={BackCard} backImage={Feuille} shouldFlip={computerChoice === 'Papier'} />

                </div>
            </div>
        </div>
    );
}

export default Game;
