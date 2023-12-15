import React from "react";
import "./testimonials.css";

import ava01 from "/testimonialsImages/ava-1.jpg";
import ava02 from "/testimonialsImages/ava-2.jpg";
import ava03 from "/testimonialsImages/ava-3.jpg";
import ava04 from "/testimonialsImages/ava-4.jpg";

const TestimonialSlider = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials-container">
        <p className="testimonial-title">Vleresimet e klienteve</p>
        <div className="gap-testimonal">
          <div className="testimonial">
            <p className="section__description">
              "Përdora shërbimin e 'Rent a Car ROBERTI' dhe isha shumë i
              kënaqur. Automjeti ishte i pastër dhe në gjendje të mirë teknike.
              Përveç kësaj, shërbimi ndaj klientëve ishte i shkëlqyeshëm. Jam i
              sigurt që do ti përdori shërbimet e tyre përsëri!
            </p>
            <div className="testimonial-img">
              <img src={ava01} alt="" />
              <div className="testimonial-details">
                <h6 className="testimonial-name">Arben</h6>
                <p className="testimonial-role">Klient</p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p className="section__description">
              "E rekomandoj me kënaqësi 'Rent a Car ROBERTI'. Automjeti që më
              dhanë ishte i rregullt dhe shërbimi ishte i shpejtë dhe efikas.
              Çmimi ishte i arsyeshëm dhe personeli ishte i sjellshëm. Do ta
              përdornim bashkë me familje përsëri për udhëtimet tona të
              ardhshme."
            </p>
            <div className="testimonial-img">
              <img src={ava02} alt="" />
              <div className="testimonial-details">
                <h6 className="testimonial-name">Elira</h6>
                <p className="testimonial-role">Kliente</p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p className="section__description">
              "Mora një makinë tek 'Rent a Car ROBERTI'.Isha i kënaqur
              plotësisht. Automjeti ishte në gjendje të shkëlqyeshme, shërbimi
              shpejtë dhe profesionist, dhe çmimi ishte i arsyeshëm. Sigurisht
              do tia sygjeroja te gjithve këtë kompani për udhëtimet e tyre."
            </p>
            <div className="testimonial-img">
              <img src={ava03} alt="" />
              <div className="testimonial-details">
                <h6 className="testimonial-name">Besmir</h6>
                <p className="testimonial-role">Klient</p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            <p className="section__description">
              "Përdorimi i 'Rent a Car ROBERTI' ishte një zgjedhje e
              shkëlqyeshme. Përdora veturen për 3 javë dhe nuk kam pasur asnjë
              problem teknik. Automjeti ishte i përshtatshëm për udhëtim dhe
              gjithçka ishte në rregull. Përkushtimi i stafit bënë që kjo
              përvojë të jetë e paharrueshme. Do ta rekomandoja me plot besim."
            </p>
            <div className="testimonial-img">
              <img src={ava04} alt="" />
              <div className="testimonial-details">
                <h6 className="testimonial-name">Luljeta</h6>
                <p className="testimonial-role">Kliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
