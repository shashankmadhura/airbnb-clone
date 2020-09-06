import React from "react";
import "./SearchCard.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchCard = ({
  src,
  location,
  title,
  star,
  description,
  price,
  total,
}) => {
  return (
    <div className="SearchCard">
      <img src={src} alt="hotel" />
      <FavoriteBorderIcon className="SearchCard__heart" />

      <div className="SearchCard__info">
        <div className="SearchCard__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="SearchCard__infoBottom">
          <div className="SearchCard__stars">
            <StarIcon className="SearchCard__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="SearchCard__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
