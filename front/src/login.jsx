import { useState } from 'react';
import './login.css';
import './components/CustomButton.jsx';
import CustomButton from './components/CustomButton.jsx';


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
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Username</h4>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div>
          <h4>Password</h4>
          <input
            type={showPassword ? 'text' : 'password'} // Afficher/masquer le mot de passe
            placeholder="password"
            value={password}
            onChange={handlePassword}
            CustomButton onClick={togglePasswordVisibility} // Ajoutez un bouton pour afficher/masquer le mot de passe
          />
        
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
