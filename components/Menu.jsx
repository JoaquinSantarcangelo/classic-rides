import React from "react";
import { motion } from "framer-motion";

const variantsMenu = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
    },
  },
};

const menuItem = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Catalogo",
    href: "/",
  },
  {
    text: "Galeria",
    href: "/",
  },
  {
    text: "Contacto",
    href: "/",
  },
];

const Menu = () => {
  return (
    <motion.div
      variants={variantsMenu}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="menu"
    >
      <div className="wrapper container">
        <div className="menu-items">
          <div className="item active">Inicio</div>
          <div className="item">Catalogo</div>
          <div className="item">Galeria</div>
          <div className="item">Contacto</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
