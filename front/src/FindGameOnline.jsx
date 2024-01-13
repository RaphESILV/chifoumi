import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import person from './svg/person-circle-outline.svg';
import loadingGif from './gif/icons8-loading.gif';

const API_URL = 'http://fauques.freeboxos.fr:3000';

function FindGame() {
    const [player1, setPlayer1] = useState(localStorage.getItem('username') || "Anonymous");
    const [player2, setPlayer2] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Commence avec isLoading à true
    const navigate = useNavigate();

    useEffect(() => {
        handleLogin();
    }, []);

            const handleLogin = async () => {
                const username = localStorage.getItem('username');
                const token = localStorage.getItem('token');
            
                console.log('username:', username);
                console.log('token:', token);

        try {
            // Tentative de création ou de rejointe d'un match
            const response = await axios.post(`${API_URL}/matches`, {}, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log('API response:', response);

            if (response.status === 201) {
                // Gérer la création ou la rejointe d'un match
                // Mettez à jour player1 et player2 ici si nécessaire
                setPlayer1(response.data.user1.username);
                if (response.data.user2) {
                    setPlayer2(response.data.user2.username);
                } else {
                    setIsLoading(true);
                }
                navigate('/Online');
            }
        } catch (error) {
            console.error('Error handling match:', error);
            // Gestion des erreurs ici
        }
    };

    return (
        <div>
            <div className="blockFind">
                <div className="player">
                    <img src={person} className="playerIcon" />
                    <p>{player1}</p> {/* Player1 est toujours défini */}
                </div>
                {isLoading ? (
                    <>
                        <img className="loadingIcon" src={loadingGif} alt="Loading..." />
                        <div className="player">
                            <img src={person} alt="Player 2" className="playerIcon" />
                            <p>Searching for player...</p>
                        </div>
                    </>
                ) : (
                    <div className="player">
                        <img src={person} alt="Player 2" className="playerIcon" />
                        {/* Si player2 n'est pas trouvé, afficher "Player2 not found" */}
                        <p>{player2 || "Player2 not found"}</p> 
                    </div>
                )}
            </div>
        </div>
    );
}

export default FindGame;
