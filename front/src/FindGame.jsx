import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import person from './svg/person-circle-outline.svg';
import loadingGif from './gif/icons8-loading.gif';

function FindGame() {
    const [player1, setPlayer1] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('username');
        setPlayer1(username);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/game');
        }, 5000); 

        return () => clearTimeout(timer); 
    }, [navigate]);

    const handleSearch = () => {
        setIsLoading(true);
        setIsLoading(false);
    };

    return (
       <div>
            <div className="blockFind">
                <div className="player">
                <img src={person} className="playerIcon" />
                <p>{player1}</p>
            </div>
                    <img className="loadingIcon" src={loadingGif} alt="Loading..." />
                    <div className="player">
                        <img src={person} alt="Player 2" className="playerIcon" />
                        <p>Computer</p>
                    </div>
            </div>
        </div>
    );
}

export default FindGame;