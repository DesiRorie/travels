import React from "react";

const Card = (item) => {
  return (
    <div className="wholeDiv">
      <img className="image" src={item.imageUrl} alt="nothing" />
      <div className="info">
        <span>
          <i className="titleClass">{item.title}</i>{" "}
          <a href={item.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h1 className="location">{item.location}</h1>
        <span>
          <b>
            {item.startDate} - {item.endDate}
          </b>
        </span>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
