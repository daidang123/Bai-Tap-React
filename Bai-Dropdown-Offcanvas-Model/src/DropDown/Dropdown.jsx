import React, { useState } from 'react';
import DropdowmMenu from './DropdowmMenu';

function Dropdown() {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu}>Dropdown button</button>
      {MenuOpen && <DropdowmMenu></DropdowmMenu>}
    </div>
  );
}

export default Dropdown