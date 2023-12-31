import React from "react";
import { motion } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <div id="Home" className="hero-main">
      <div className="overlay"></div>
      <div className="hero-main-p">
        <div className="hero-title">
          <motion.div
            initial={{ y: "-5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="hero-title-top"
          >
            Rezervo
            <br /> duke filluar me <span className="hero-price">25€</span>
          </motion.div>

          <a href="#veturatt" className="rezervo-veturen">
            Rezervo Tani
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
