import React, { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const API_URL = 'http://fauques.freeboxos.fr:3000'; 

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

const handleRegister = async (e) => {
  e.preventDefault();

  const idUser = uuidv4();
  try {
    const response = await axios.post(`${API_URL}/register`, { id_: idUser, username, password });
    console.log('API response:', response);
    if (response.status === 201) {
      console.log('Succès:', response.data);
      {
        alert('Compte créé');
      }
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Registration error:', error);
    if (error.response && error.response.status === 409) {
      alert('Erreur d\'inscription: Un utilisateur avec ce nom d\'utilisateur existe déjà.');
    } else {
      alert('Erreur d\'inscription: ' + error.message);
    }
  }
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
          <CustomButton to="/" type="submit" onClick={handleRegister}>Create </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Register;
