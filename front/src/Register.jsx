import React, { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';



function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  function handleClick() {
    setShowPassword(!showPassword);
    setTimeout(() => {
      setShowPassword(false);
    }, 3000);
  }

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password
    };

    fetch('http://localhost:5173/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'est pas correcte');
      }
      return response.json();
    })
    .then(data => {
      // Gérez ici l'inscription réussie
      console.log('Succès:', data);
    })
    .catch((error) => {
      // Gérez ici les erreurs
      console.error('Erreur:', error);
    });
  }

  return (
    <div className="Login block">
      <h2 className="text-none">{'Register'}</h2>
      <form onSubmit={handleRegister}>
        <div className='text-none'>
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsername} />
        </div>
        <div className='text-none'>
          <label>Password</label>
          <div  className="password-input" >
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePassword}
            />
            <span onClick={handleClick} style={{ cursor: 'pointer' }}>
              {showPassword ? (
                <img src={closedEye} alt="Hide Icon" width={25} />
              ) : (
                <img src={Eye} alt="Show Icon" width={25} />
              )}
            </span>
          </div>
        </div>
        <div className="button-container">
          <CustomButton to="/" type="submit">Create </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Register;
