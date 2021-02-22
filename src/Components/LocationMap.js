import React from "react";
import Map from "google-maps-react";

function LocationMap() {
  return (
    <>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60932.42647982577!2d78.52846272077483!3d17.350415685439508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ee3de0f1bf%3A0x8f6c54bc46f6b1b!2sYaaltech!5e0!3m2!1sen!2sin!4v1601796978550!5m2!1sen!2sin"></iframe>
      </div>
    </>
  );
}

export default LocationMap;
