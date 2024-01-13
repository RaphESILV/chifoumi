import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButtonMenu from './components/CustomButtonMenu';

const Menu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/'); // Redirige vers la page de connexion si aucun token n'est trouvé
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log('Token removed'); 
    navigate('/');
  }
  return (
    <div className=" block" >
      <h3 className="text-none">{'Menu'}</h3>
      <CustomButtonMenu to="/FindGame"className="text-none">{'Play'}</CustomButtonMenu>
      <CustomButtonMenu to="/history" className="text-none">{'Game History'}</CustomButtonMenu>
      <CustomButtonMenu to="/" className="text-none" onClick={handleLogout}>{'Log out'}</CustomButtonMenu>
    </div>
  );
}

export default Menu;