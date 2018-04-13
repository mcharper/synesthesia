import React from "react";
import PropTypes from "prop-types";
import CrossfadeImage from "react-crossfade-image";

const Visualiser = ({ changeNumber }) => {
  if(changeNumber % 2 === 0) {
    return (
        <CrossfadeImage className="visual" duration="1000" src="https://picsum.photos/800/301?random" />
    );
  }
  else {
    return (
      <CrossfadeImage className="visual" duration="1000" src="https://picsum.photos/801/300?random" />
    );
  }
};

Visualiser.propTypes = {
  changeNumber: PropTypes.number
};

export default Visualiser;
