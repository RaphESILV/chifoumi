import React, { useState } from 'react';
import CustomButton from './components/CustomButton.jsx';
import Eye from './svg/eye.svg';
import closedEye from './svg/closed-eye.svg';
import './login.jsx';


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
    }
    // Code pour la soumission du formulaire
  }



  return (
    <div>
      <link to="/Register" />
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
          <from onSubmit={handleRegister}></from>
          <link to="/login"></link>
          <CustomButton type="submit">Create </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Register;
