import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./hero.css";
const Hero = () => {
  return (
    <div id="Home" className="hero-main">
      <div className="overlay"></div>

      <div className="hero-title">
        <motion.div
          initial={{ y: "-5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 4, type: "spring" }}
          className="hero-title-top"
        >
          Rent A Car
          <br />
          <p className="roberti"> ROBERTI</p>
        </motion.div>

        <div className="stats">
          {" "}
          <motion.div
            initial={{ y: "5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="stat"
          >
            <span>
              <CountUp start={20} end={200} duration={4} />
              <span className="plus"> +</span>
            </span>
            <span className="hero-partners">Klient</span>
          </motion.div>
          <motion.div
            initial={{ y: "5rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 4, type: "spring" }}
            className="stat"
          >
            <span>
              <CountUp start={10} end={50} duration={4} />
              <span className="plus"> +</span>
            </span>
            <span className="hero-partners">Makina</span>
          </motion.div>
        </div>
        <a href="#veturat" className="rezervo-veturen">
          Rezervo Tani
        </a>
      </div>
    </div>
  );
};

export default Hero;
