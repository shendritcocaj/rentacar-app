import React from "react";
import location_video from "../../assets/video1.mp4";
import "./location.css";
const Location = () => {
  return (
    <div className="video-events" id="location">
      <div className="location-title">Lokacioni</div>
      <div className="video-wrappper">
        <video className="video1" controls>
          <source src={location_video} type="" />
        </video>
      </div>
    </div>
  );
};

export default Location;
