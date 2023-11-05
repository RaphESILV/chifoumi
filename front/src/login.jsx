import { useState } from 'react';
import './login.css';
import './components/CustomButton.jsx';
import CustomButton from './components/CustomButton.jsx';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';


// Importez la bibliothèque FontAwesome (ou une autre bibliothèque d'icônes) si ce n'est pas déjà fait.

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    }
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
  }

  return (
    <div className="Login box">
      <h2 className="text-none">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <h4 className="text-none">Username</h4>
        <div className="text-none">
          <input 
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <h4 className="text-none">Password</h4>
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
          <span className="text-none" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
            {showPassword ? (
              <img src={closedEye} alt="Hide Icon" width={25} />
            ) : (
              <img src={Eye} alt="Show Icon" width={25} />
            )}
          </span>
        </div>
        <CustomButton className="text-none" type="submit" >Login</CustomButton>

      </form>
    </div>
  );
}

export default Login;
