import React, { useState } from 'react';
import CustomButton from './components/CustomButton';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';
import './login.jsx';

function CreateAccount() {
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

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Compte créé avec succès.');
      } else {
        alert('La création de compte a échoué.');
      }
    } catch (error) {
      console.error('Erreur lors de la création de compte :', error);
    }
  }

  return (
    <div>
      <form onSubmit={handleCreateAccount}>
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
          <CustomButton type="submit">Create </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
