import React from "react";
import featurecards from "./featurecards";

function FuaturedPlaces() {
  return (
    <>
      <div className="fuature_container">
        <div className="container ">
          <div className="popularcard_title">
            <p>Featured Places</p>
            <h2>Praesent nec dui sed urna</h2>
          </div>
          <div className="row pt-4 mb-4">
            {featurecards.map((item, index) => (
              <FeatureCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FeatureCard(props) {
  return (
    <div className="col-lg-4 mb-4">
      <div className="feature_card">
        <img src={props.data.image} alt="" />
        <div>
          <h4 className="futurecard_heading">{props.data.title}</h4>
          <span className="futured_subheading">{props.data.category}</span>
          <p className="futuredcard1_content">{props.data.content}</p>
        </div>
        <div className="buttons">
          <a href="#" className="futurecard_button">
            Add to favorites
          </a>
          <a href="#" className="futurecard_button">
            continue reading
          </a>
        </div>
      </div>
    </div>
  );
}

export default FuaturedPlaces;
