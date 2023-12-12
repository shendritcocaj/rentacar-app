import "./footer.css";

const Footer = () => {
  return (
    <div className="bordertop">
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-numbers">
            {" "}
            <strong className="numbers-title">Numrat kontaktues</strong>
            <div className="mobile-numbers">
              <p>+383 49 518 518</p>
              <p>+383 45 612 613</p>
            </div>
          </div>
          <div className="left-footer">
            <div className="footer-social">
              <strong>Ku mund të na gjeni? </strong>{" "}
              <p> Aeroporti Nderkombetar “Adem Jashari”</p>
            </div>{" "}
            <div className="insta-fb">
              {" "}
              <a
                href="https://www.instagram.com/rentacar.roberti/"
                className="home-social-icon footer-icon"
                target="_blank"
              >
                <i className="uil uil-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/rentacarroberti/"
                className="home-social-icon  footer-icon"
                target="_blank"
              >
                <i className="uil uil-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-copy">
          {" "}
          &#169;2023 Rent a car ROBERTI. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
