import React from "react";
import PropTypes from "prop-types";
import CrossfadeImage from "react-crossfade-image";

const Visualiser = ({ changeNumber }) => {
  if(changeNumber % 2 === 0) {
    return (
        <CrossfadeImage className="visual" duration="2000" src={"https://picsum.photos/800/300?image=" + changeNumber} />
    );
  }
  else {
    return (
      <CrossfadeImage className="visual" duration="2000" src={"https://picsum.photos/800/300?image=" + changeNumber} />
    );
  }
};

Visualiser.propTypes = {
  changeNumber: PropTypes.number
};

export default Visualiser;
