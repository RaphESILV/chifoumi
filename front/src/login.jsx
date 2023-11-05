import { useState } from 'react';
import './login.css';
import './components/CustomButton.jsx';
import CustomButton from './components/CustomButton.jsx';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';
import CreateAccount from './CreateAccount';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

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

  const handleToggleCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    }
    // Code pour la soumission du formulaire

    if (showCreateAccount) {
      // Si le formulaire de création de compte est affiché, passez à l'écran de connexion
      setShowCreateAccount(false);
    }
  }

  return (
    <div className="Login box">
      <h2 className="text-none">{showCreateAccount ? 'Create an account' : 'Sign in'}</h2>
      <form onSubmit={handleSubmit}>
        {showCreateAccount ? (
          // Affichez le formulaire de création de compte
          <CreateAccount />
        ) : (
          // Affichez le formulaire de connexion
          <>
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
              <CustomButton className="text-none" type="submit" >{showCreateAccount ? 'Create an account' : 'Login'}</CustomButton>
              <CustomButton onClick={handleToggleCreateAccount}>
                {showCreateAccount ? 'Retour à la connexion' : 'Create an account'}
              </CustomButton>
            </div>
          </>
        )}
      </form>
    </div>
  );
  
}

export default Login;
