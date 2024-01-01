import { useState } from 'react';
import './login.css';
import CustomButton from './components/CustomButton.jsx';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';
import { Link } from 'react-router-dom';

function Login() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    }
    // Code pour la soumission du formulaire
  }

  return (
    <div className="Login box">
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
          <CustomButton className="text-none" type="submit">Login</CustomButton>
        </div>
        <div className='button-container'>
            <CustomButton className='text-none' type='submit'>Register</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Login;