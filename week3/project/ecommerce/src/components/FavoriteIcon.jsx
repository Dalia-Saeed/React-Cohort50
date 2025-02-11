import PropTypes from "prop-types";
import filledHeart from "../assets/heart-filled.svg";
import outlineHeart from "../assets/heart-outline.svg";

const FavoriteIcon = ({ isFavorited, toggleFavorite }) => {
  return (
    <img
      src={isFavorited ? filledHeart : outlineHeart}
      alt="Favorite Icon"
      onClick={toggleFavorite}
      style={{ cursor: "pointer", width: "24px", height: "24px" }}
    />
  );
};

FavoriteIcon.propTypes = {
  isFavorited: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default FavoriteIcon;
