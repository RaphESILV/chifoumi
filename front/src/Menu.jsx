import React from 'react';
import CustomButton from './components/CustomButton';

const Menu = () => {
    return (
        <div className="Login block" >
            <h2 className="text-none">{'Menu'}</h2>
            <h2 className="text-none">{'Bienvenue'}</h2>
            <CustomButton className="text-none">{'Ajouter un produit'}</CustomButton>
            <CustomButton className="text-none">{'Modifier un produit'}</CustomButton>
            <CustomButton className="text-none">{'Supprimer un produit'}</CustomButton>
            <CustomButton className="text-none">{'Liste des produits'}</CustomButton>

    </div>
  );
    }

export default Menu;
