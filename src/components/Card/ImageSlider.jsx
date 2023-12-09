import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="containerStyles">
      <div className="sliderStyles">
        <div onClick={goToPrevious} className="leftArrowStyles">
          ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
          ❱
        </div>

        <div
          className="slideStyles"
          style={{
            ...slideStyles,

            backgroundImage: `url(${images[currentIndex].url})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageSlider;
