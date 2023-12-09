import React from "react";
import { Link, useParams } from "react-router-dom";
import "./card.css";
import ImageSlider from "./ImageSlider";
import carsData from "../../../data/db.json";
import Navbar from "../Navbar/Navbar";

const Card = () => {
  const { id } = useParams();
  const car = carsData.cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div className="card-main-container">
      <div className="card-wrapper">
        <Link to="/" className="modal-close">
          Kthehu
        </Link>{" "}
        <div className="card">
          <div className="card-title">Audi A6 Matrix</div>
          <div className="card-container">
            {" "}
            <ImageSlider images={car.images} />
            <div className="card-info">
              <div className="card-car-details">
                <p>
                  {" "}
                  <strong>Modeli:</strong>
                  <strong className="details-into">{car.model}</strong>
                </p>
                <p>
                  <strong>Motori:</strong>
                  <strong className="details-into">{car.engine}</strong>
                </p>
                <p>
                  <strong>Karburanti:</strong>
                  <strong className="details-into">{car.fuel}</strong>
                </p>
                <p>
                  <strong>Marshi:</strong>
                  <strong className="details-into">{car.transmission}</strong>
                </p>
                <p>
                  <strong>Numri i dyerve:</strong>
                  <strong className="details-into">{car.doors}</strong>
                </p>
                <p>
                  <strong>Viti:</strong>
                  <strong className="details-into">{car.year}</strong>
                </p>
                <p className="card-car-price">
                  <strong>Fillon nga:</strong>
                  <strong className="details-into">{car.price}/24h</strong>
                </p>
              </div>

              <div className="card-contact-info">
                <a
                  href="mailto:Rentacarroberti@hotmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card-contact-button"
                >
                  <i className="uil uil-envelope-minus"></i>
                  <h3 className="card-car-icon">Email</h3>
                </a>

                <a
                  href="https://wa.me/+38349377922"
                  target="_blank"
                  rel="noreferrer"
                  className="card-contact-button "
                >
                  <i className="uil uil-whatsapp"></i>
                  <h3 className="card-car-icon">Whatsapp</h3>
                </a>

                <a
                  href="https://m.me/roberti"
                  rel="noreferrer"
                  target="_blank"
                  className="card-contact-button-messenger "
                >
                  <i className="uil uil-facebook-messenger-alt"></i>
                  <h3 className="card-car-icon">Messenger</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
