import React from 'react';
import CustomButtonMenu from './components/CustomButtonMenu';

const Menu = () => {
    return (
        <div className=" block" >
            <h3 className="text-none">{'Menu'}</h3>
            <CustomButtonMenu className="text-none">{'Play'}</CustomButtonMenu>
            <CustomButtonMenu className="text-none">{'Game History'}</CustomButtonMenu>
            <CustomButtonMenu to="/" className="text-none">{'Log out'}</CustomButtonMenu>
    </div>
  );
    }

export default Menu;
