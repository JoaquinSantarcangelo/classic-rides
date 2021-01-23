import React from "react";
import { motion } from "framer-motion";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Catalogo = () => {
  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="catalogo"
    >
      Catalogo
    </motion.div>
  );
};

export default Catalogo;
