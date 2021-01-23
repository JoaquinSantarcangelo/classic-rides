import React from "react";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

const variantsTransition = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Home = () => {
  return (
    <motion.div
      variants={variantsTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home"
    >
      <Hero />
    </motion.div>
  );
};

export default Home;
