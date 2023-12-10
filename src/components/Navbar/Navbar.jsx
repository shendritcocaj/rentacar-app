import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logogold.png";
import "./navbar.css";

const Navbar = () => {
  const [menu, showMenu] = useState(false);

  const closeMenu = () => {
    showMenu(false);
  };

  return (
    <header className="header">
      <motion.nav className="nav">
        <div className="logo-wrapper">
          <motion.img
            animate={{ x: 0 }}
            initial={{ x: -80, opacity: 0 }}
            exit={{ x: 200, opacity: 1 }}
            transition={{ duration: 1.6 }}
            whileInView={{ opacity: 1 }}
            className="nav-logo"
            src={logo}
            alt="logo"
          ></motion.img>
          {/* <a href="#" className="logo-text">
            <img src={logo} alt="" />
          </a> */}
        </div>
        <div className={menu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -120, opacity: 0 }}
              transition={{ duration: 1.4 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#" className="nav-link" onClick={closeMenu}>
                <i className="uil uil-car nav-icon"></i> Ballina
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#veturatt" className="nav-link" onClick={closeMenu}>
                <i className="uil uil-user nav-icon"></i> Veturat
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#Questions" className="nav-link" onClick={closeMenu}>
                <i className="uil uil-info-circle nav-icon"></i> Info
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#location" className="nav-link" onClick={closeMenu}>
                <i className="uil uil-info-circle nav-icon"></i> Lokacioni
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.5 }}
              whileInView={{ opacity: 1 }}
              className="nav-item"
            >
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                <i className="uil uil-message nav-icon"></i> Kontakti
              </a>
            </motion.li>
          </ul>

          <i
            className="uil uil-times nav-close"
            onClick={() => showMenu(!menu)}
          ></i>
        </div>
        <div className="nav-toggle" onClick={() => showMenu(!menu)}>
          <i className="uil uil-apps"></i>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
