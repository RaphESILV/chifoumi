import { useState } from 'react';
import './login.css';
import CustomButton from './components/CustomButton.jsx';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';
import './App.jsx'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://fauques.freeboxos.fr:3000'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
 
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Veuillez entrer un nom d\'utilisateur et un mot de passe');
      return;
    }

    const data = {
      username: username,
      password: password
    };

    try {
      const response = await axios.post(`${API_URL}/login`, data);
      console.log('API response:', response);
      if (response.status === 200 && response.data.token) {
        console.log('Succès:', response.data);
        alert('Connexion réussie');
        localStorage.setItem('token', response.data.token); // Sauvegarde le token dans le local storage
        localStorage.setItem('username', username); // Sauvegarde le nom d'utilisateur dans le local storage
        navigate('/Menu'); // Redirige vers "/Menu" après une connexion réussie
      } else {
        console.error('Login failed with response:', response.data);
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error);
      if (error.response && error.response.status === 401) {
        alert('Erreur de connexion: Nom d\'utilisateur ou mot de passe incorrect.');
      } else {
        alert('Erreur de connexion: ' + error.message);
      }
      // Pas de redirection en cas d'échec de la connexion
    }
  }


  return (
    <div className="Login block" >
    <h2 className="text-none">{'Sign in'}</h2>
    <form onSubmit={handleSubmit}>
      <label className="text-none">Username</label>
      <div className="text-none">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <label className="text-none">Password</label>
      <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
          
          <span className="text-none" onClick={handleClick} style={{ cursor: 'pointer' }}>
            {showPassword ? (
              <img src={closedEye} alt="Hide Icon" width={25} />
            ) : (
              <img src={Eye} alt="Show Icon" width={25} />
            )}
          </span>
        </div>
        <div className="button-container">
          <CustomButton className="text-none" type="submit" onClick={handleSubmit}>Login</CustomButton>
        </div>
        <div className='button-container'>
            <CustomButton to ="/Register">Register</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Login;