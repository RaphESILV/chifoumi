import React, { useState } from 'react';

// Composant Card pour afficher une carte qui peut être retournée
function Card({ frontImage, backImage, shouldFlip }) {
    // État local pour gérer si la carte est retournée ou non
    const [isFlipped, setIsFlipped] = useState(false);

    // Fonction pour basculer l'état de retournement de la carte
    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        // Ajout de aria-label pour améliorer l'accessibilité
        <div className={`card ${shouldFlip ? 'flipped' : ''}`}>
            <div className="front">
                {/* Image de devant de la carte */}
                <img src={frontImage} alt="Front" style={{maxWidth: '100px', borderRadius:"3px"}} />
            </div>
            <div className="back">
                {/* Image de derrière de la carte */}
                <img src={backImage} alt="Back" style={{maxWidth: '100px', borderRadius:"3px"}} />
            </div>
        </div>
    );
}

export default Card;
