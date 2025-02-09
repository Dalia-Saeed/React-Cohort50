import { BeanHead } from "beanheads/dist";
import PropTypes from "prop-types";

function ShowAvatar({ size }) {
  if (size > 1000) {
    return (
      <BeanHead
        accessory="roundGlasses"
        body="chest"
        circleColor="blue"
        clothing="shirt"
        clothingColor="black"
        eyebrows="angry"
        eyes="happy"
        facialHair="mediumBeard"
        graphic="vue"
        hair="short"
        hairColor="black"
        hat="none"
        hatColor="green"
        lashes="false"
        lipColor="purple"
        mask="true"
        faceMask="true"
      />
    );
  } else if (size > 700 && size <= 1000) {
    return (
      <BeanHead
        accessory="none"
        body="breasts"
        circleColor="blue"
        clothing="dress"
        clothingColor="green"
        eyebrows="raised"
        eyes="simple"
        facialHair="none"
        graphic="vue"
        hair="long"
        hairColor="pink"
        hat="none"
        hatColor="green"
        lashes="false"
        lipColor="purple"
        mask="true"
        faceMask="true"
      />
    );
  } else {
    return (
      <BeanHead
        accessory="shades"
        body="chest"
        circleColor="blue"
        clothing="tankTop"
        clothingColor="black"
        eyebrows="angry"
        eyes="leftTwitch"
        facialHair="stubble"
        graphic="react"
        hair="balding"
        hairColor="white"
        hat="beanie"
        hatColor="green"
        lashes="false"
        lipColor="purple"
        mask="true"
        faceMask="true"
      />
    );
  }
}

ShowAvatar.propTypes = {
  size: PropTypes.number.isRequired, // Expect 'size' to be a number and required
};

export default ShowAvatar;
