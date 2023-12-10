import React, { useState } from "react";
import carsData from "../../../data/db.json";
import "./cars.css";
import { Link } from "react-router-dom";

const Cars = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [visibleCars, setVisibleCars] = useState(8);

  const handleFilter = (brand) => {
    setSelectedType(brand);
    setVisibleCars(8);
  };

  const loadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 8);
  };

  const filteredCars = selectedType
    ? carsData.cars.filter((car) => car.brand === selectedType)
    : carsData.cars;

  return (
    <div id="veturatt" className="scroll-position">
      <div id="veturat" className="">
        <div className="cars-title">Veturat</div>

        <div className="cars-filter">
          <p className="expenses" onClick={() => handleFilter(null)}>
            Te Gjitha
          </p>
          <p className="expenses" onClick={() => handleFilter("Audi")}>
            Audi
          </p>
          <p className="expenses" onClick={() => handleFilter("Mercedes")}>
            Mercedes
          </p>
          <p className="expenses" onClick={() => handleFilter("Volkswagen")}>
            Volkswagen
          </p>
          <p className="expenses" onClick={() => handleFilter("BMW")}>
            BMW
          </p>
          <p className="expenses" onClick={() => handleFilter("Renault")}>
            Renault
          </p>
        </div>
        <div className="cars">
          {filteredCars.slice(0, visibleCars).map((car, i) => (
            // <Link to={`/cars/${car.id}`} key={i} className="car-link">
            <div key={i} className="car">
              {car.mostWanted && (
                <div className="mostWanded">Me i kerkuari</div>
              )}
              {car.economic && (
                <div className="mostWanded economic">Ekonomik</div>
              )}
              <div className="top-info">
                <div className="car-name">
                  {car.brand}
                  <p
                    className={
                      car.mostWanted || car.economic
                        ? "car-year true"
                        : "car-year"
                    }
                  >
                    <span
                      className={
                        car.mostWanted || car.economic
                          ? "car-year-text"
                          : "car-year-text text-true"
                      }
                    >
                      Viti
                    </span>
                    <span className="car-year-number">{car.year}</span>
                  </p>
                </div>
                <div className="price">
                  {car.price}
                  <span className="car-hours">/24h</span>{" "}
                </div>
              </div>
              <img src={car.images[0].url} alt={`Car ${i}`} />

              <div className="bottom-info">
                <div className="marshi">
                  <i className="uil uil-streering car-icon"></i>
                  <span>{car.transmission}</span>
                </div>
                <div className="type">
                  <i className="uil uil-car car-icon-car"></i>
                  <span>{car.doors} Dyer</span>
                </div>
                <div className="shpenzimet">
                  <i className="uil uil-pump car-icon"></i>
                  <span>{car.expenses}</span>
                </div>
              </div>
              <Link to={`/cars/${car.id}`} key={i} className="car-details-link">
                Rezervo
              </Link>
            </div>
            // </Link>
          ))}
        </div>
        {visibleCars < filteredCars.length && (
          <button className="show-more" onClick={loadMore}>
            Me Shume
          </button>
        )}
      </div>
    </div>
  );
};

export default Cars;
