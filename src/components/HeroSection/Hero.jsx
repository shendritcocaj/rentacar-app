import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <div id="Home" className="hero-main">
      <div className="overlay"></div>
      <p>
        <div className="hero-title">
          <motion.div
            initial={{ y: "-5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="hero-title-top"
          >
            Rezervo
            <br /> duke filluar me <span className="hero-price">20€</span>
          </motion.div>

          <a href="#veturat" className="rezervo-veturen">
            Rezervo Tani
          </a>
        </div>
      </p>
    </div>
  );
};

export default Hero;
