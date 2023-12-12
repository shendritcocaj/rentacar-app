import { useEffect } from "react";
import "./card.css";
const CarModal = ({ isOpen, onClose, car }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <div className="card">
          <div className="cardtop">
            <div className="leftcard">
              <div className="card-title">{car.model}</div>
              <img src={car.images[0].url} alt={`Car `} />
            </div>
            <div className="card-container">
              {" "}
              <div className="card-car-details">
                <p>
                  {" "}
                  <span className="details-into car-model">{car.model}</span>
                </p>

                <p>
                  <span>Motori: </span>
                  <span className="details-into">{car.engine}</span>
                </p>
                <p>
                  <span>Karburanti: </span>
                  <span className="details-into">{car.fuel}</span>
                </p>

                <p>
                  <span>Marshi: </span>
                  <span className="details-into">{car.transmission}</span>
                </p>
                <p>
                  <span>Numri i dyerve: </span>
                  <span className="details-into">{car.doors}</span>
                </p>

                <p>
                  <span>Viti: </span>
                  <span className="details-into">{car.year}</span>
                </p>
                <p className="card-car-price">
                  <span>Fillon nga: </span>
                  <span className="details-into price-modal">
                    {car.price}€/Dita
                  </span>
                </p>
              </div>
            </div>
          </div>
          <p className="contact-moddal">Kontakto per rezervim:</p>
          <div className="card-contact-info">
            <a
              href="mailto:Rentacarroberti@hotmail.com"
              target="_blank"
              rel="noreferrer"
              className="card-contact-button"
            >
              <i className="uil uil-envelope-minus modalicon-email"></i>
              <h3 className="card-car-icon">Email</h3>
            </a>

            <a
              href="https://wa.me/+38349518518"
              target="_blank"
              rel="noreferrer"
              className="card-contact-button "
            >
              <i className="uil uil-whatsapp modalicon-whatsapp"></i>
              <h3 className="card-car-icon">Whatsapp</h3>
            </a>

            <a
              href="https://m.me/rentacarroberti"
              rel="noreferrer"
              target="_blank"
              className="card-contact-button-messenger "
            >
              <i className="uil uil-facebook-messenger-alt modalicon-messenger"></i>
              <h3 className="card-car-icon">Messenger</h3>
            </a>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CarModal;
