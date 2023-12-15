import { useState } from "react";
import { motion } from "framer-motion";
import logo1 from "../../assets/logoroberti.png";
import "./navbar.css";

const Navbar = () => {
  const [menu, showMenu] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const closeMenu = () => {
    showMenu(false);
  };

  const handleNavItemClick = (item) => {
    setActiveNavItem(item.toLowerCase());
    closeMenu();
  };

  return (
    <header className="header">
      <motion.nav className="nav">
        <div className="logo-wrapper">
          <a href="#" className="logo-text">
            <motion.img
              animate={{ x: 0 }}
              initial={{ x: -80, opacity: 0 }}
              exit={{ x: 200, opacity: 1 }}
              transition={{ duration: 1.6 }}
              whileInView={{ opacity: 1 }}
              className="nav-logo"
              src={logo1}
              alt="logo"
            ></motion.img>
          </a>
        </div>
        <div className={menu ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -120, opacity: 0 }}
              transition={{ duration: 1.4 }}
              whileInView={{ opacity: 1 }}
              className={`nav-item ${activeNavItem === "home" ? "active" : ""}`}
            >
              <a
                href="#"
                className="nav-link"
                onClick={() => handleNavItemClick("home")}
              >
                <i className="uil uil-car nav-icon"></i> Ballina
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1 }}
              className={`nav-item ${
                activeNavItem === "veturatt" ? "active" : ""
              }`}
            >
              <a
                href="#veturatt"
                className="nav-link"
                onClick={() => handleNavItemClick("veturatt")}
              >
                <i className="uil uil-user nav-icon"></i> Veturat
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1 }}
              className={`nav-item ${activeNavItem === "info" ? "active" : ""}`}
            >
              <a
                href="#Questions"
                className="nav-link"
                onClick={() => handleNavItemClick("info")}
              >
                <i className="uil uil-question-circle nav-icon"></i> Informata
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.6 }}
              whileInView={{ opacity: 1 }}
              className={`nav-item ${
                activeNavItem === "perne" ? "active" : ""
              }`}
            >
              <a
                href="#aboutus"
                className="nav-link"
                onClick={() => handleNavItemClick("perne")}
              >
                <i className="uil uil-info-circle nav-icon"></i> Per Ne
              </a>
            </motion.li>
            <motion.li
              animate={{ x: 0 }}
              initial={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.4 }}
              whileInView={{ opacity: 1 }}
              className={`nav-item ${
                activeNavItem === "contact" ? "active" : ""
              }`}
            >
              <a
                href="#contact"
                className="nav-link"
                onClick={() => handleNavItemClick("contact")}
              >
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
