import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";

import ava01 from "/testimonialsImages/ava-1.jpg";
import ava02 from "/testimonialsImages/ava-2.jpg";
import ava03 from "/testimonialsImages/ava-3.jpg";
import ava04 from "/testimonialsImages/ava-4.jpg";

const testimonialsData = [
  {
    text: "Përdora shërbimin e 'Rent a Car ROBERTI' dhe isha shumë e kënaqur. Automjeti ishte i pastër dhe në gjendje të mirë teknike. Përveç kësaj, shërbimi ndaj klientëve ishte i shkëlqyeshëm. Jam e sigurt që do ti përdor shërbimet e tyre përsëri!",
    author: "Arben",
    role: "Kliente",
    avatar: ava01,
  },
  {
    text: "E rekomandoj me kënaqësi 'Rent a Car ROBERTI'. Automjeti që më dhanë ishte i rregullt dhe shërbimi ishte i shpejtë dhe efikas. Çmimi ishte i arsyeshëm dhe personeli ishte i sjellshëm. Do ta përdornim përsëri për udhëtimet tona të ardhshme.",
    author: "Elira",
    role: "Klient",
    avatar: ava02,
  },
  {
    text: "Morra një makinë tek 'Rent a Car ROBERTI'. Isha e kënaqur plotësisht. Automjeti ishte në gjendje të shkëlqyeshme, shërbimi shpejtë dhe profesionist, dhe çmimi ishte i arsyeshëm. Sigurisht do tia sygjeroja të gjithëve këtë kompani për udhëtimet e tyre.",
    author: "Besmir",
    role: "Kliente",
    avatar: ava03,
  },
  {
    text: "Përdorimi i 'Rent a Car ROBERTI' ishte një zgjedhje e shkëlqyeshme. Automjeti ishte i përshtatshëm për udhëtimi dhe gjithçka ishte në rregull. Përkushtimi i stafit bënë që kjo përvojë të jetë e paharrueshme. Do ta rekomandoja me plot besim.",
    author: "Luljeta",
    role: "Klient",
    avatar: ava04,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-container">
      {" "}
      <p className="testimonial-title">Qfar mendojne klientet tane</p>
      <Slider {...settings} className="testimonial-slider">
        {" "}
        {testimonialsData.map((testimonial, index) => (
          <div className="gap-testimonal">
            <div key={index} className="testimonial">
              <p className="section__description">{testimonial.text}</p>

              <div className="testimonial-img">
                <img src={testimonial.avatar} alt="" />

                <div>
                  <h6 className="testimonial-name">{testimonial.author}</h6>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
