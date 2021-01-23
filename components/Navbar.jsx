import React from "react";


const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">Logo</div>
        <div onClick={() => setMenuOpen(!menuOpen)} className="menu-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
