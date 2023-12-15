import React, { useState } from "react";
import carsData from "../../../data/db.json";
import "./cars.css";

import CarModal from "./CarModal";

const Cars = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("lowest");
  const carsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePriceFilter = (priceFilter) => {
    setSelectedPriceFilter(priceFilter);
    setCurrentPage(1);
  };

  const handleFilter = (brand) => {
    setSelectedType(brand);
    setCurrentPage(1);
  };

  const applyFilters = () => {
    let filteredCars = carsData.cars;

    if (selectedType) {
      filteredCars = filteredCars.filter((car) => car.brand === selectedType);
    }

    if (selectedPriceFilter === "highest") {
      return filteredCars.sort((a, b) => b.price - a.price);
    } else if (selectedPriceFilter === "lowest") {
      return filteredCars.sort((a, b) => a.price - b.price);
    } else {
      return filteredCars.sort((a, b) => a.id - b.id);
    }
  };
  const filteredCars = applyFilters();

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setTimeout(() => {
      const carsSection = document.getElementById("veturat");
      if (carsSection) {
        carsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const openModal = (car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  const isTwoCars = filteredCars.length === 2;

  return (
    <div id="veturatt" className="scroll-position">
      <div id="veturat" className="">
        <div className="cars-title">Veturat</div>
        <div className="filter-width-fix">
          <div className="cars-filters">
            <div className="price-filters">
              <p
                onClick={() => handlePriceFilter("lowest")}
                className={`price-expenses ${
                  selectedPriceFilter === "lowest" ? "active" : ""
                }`}
              >
                Nga cmimi i ulet tek i larti
              </p>
              <p
                onClick={() => handlePriceFilter("highest")}
                className={`price-expenses ${
                  selectedPriceFilter === "highest" ? "active" : ""
                }`}
              >
                Nga cmimi i lart tek i uleti
              </p>
            </div>

            <div className="cars-filter-brand">
              <p
                className={`expenses ${selectedType === null ? "active" : ""}`}
                onClick={() => handleFilter(null)}
              >
                Te Gjitha
              </p>
              <p
                className={`expenses ${
                  selectedType === "Audi" ? "active" : ""
                }`}
                onClick={() => handleFilter("Audi")}
              >
                Audi
              </p>
              <p
                className={`expenses ${
                  selectedType === "Dacia" ? "active" : ""
                }`}
                onClick={() => handleFilter("Dacia")}
              >
                Dacia
              </p>
              <p
                className={`expenses ${
                  selectedType === "Volkswagen" ? "active" : ""
                }`}
                onClick={() => handleFilter("Volkswagen")}
              >
                Volkswagen
              </p>
              <p
                className={`expenses ${selectedType === "BMW" ? "active" : ""}`}
                onClick={() => handleFilter("BMW")}
              >
                BMW
              </p>
              <p
                className={`expenses ${
                  selectedType === "Renault" ? "active" : ""
                }`}
                onClick={() => handleFilter("Renault")}
              >
                Renault
              </p>
            </div>
          </div>
        </div>
        <div className="cars-width-fix">
          <div className={`cars ${isTwoCars ? "align-start" : ""}`}>
            {currentCars.map((car, i) => (
              <div
                key={i}
                to="#"
                onClick={() => openModal(car)}
                // className="car-details-link"
              >
                {" "}
                <div className="car">
                  {car.mostWanted && (
                    <div className="mostWanded">Me i kerkuari</div>
                  )}
                  {car.economic && (
                    <div className="mostWanded economic">Ekonomik</div>
                  )}
                  <div className="top-info">
                    <div className="car-name">
                      {car.model}
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
                      €{car.price}
                      <span className="car-hours">/24h</span>{" "}
                    </div>
                  </div>
                  <img
                    className="first-image"
                    src={car.images[0].url}
                    alt={`Car ${i}`}
                  />
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
                  </div>{" "}
                  <div
                    to="#"
                    onClick={() => openModal(car)}
                    className="car-details-link"
                  >
                    Rezervo{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`prev-button ${
              currentPage === 1 ? "disabled" : "enabled"
            }`}
          >
            Prev
          </button>
          {Array.from({
            length: Math.ceil(filteredCars.length / carsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={
                currentPage === index + 1 ? "pagenumber active" : "pagenumber"
              }
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredCars.length / carsPerPage)
            }
            className={`next-button ${
              currentPage === Math.ceil(filteredCars.length / carsPerPage)
                ? "disabled"
                : "enabled"
            }`}
          >
            Next
          </button>
        </div>

        <CarModal
          isOpen={selectedCar !== null}
          onClose={closeModal}
          car={selectedCar}
        />
      </div>
    </div>
  );
};

export default Cars;
