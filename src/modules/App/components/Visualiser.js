import React from "react";
import PropTypes from "prop-types";
import CrossfadeImage from "react-crossfade-image";

const Visualiser = ({ changeNumber }) => {
    return (
        <CrossfadeImage className="visual" duration="2000" src={"https://picsum.photos/800/300?random&" + changeNumber} />
    );
};

Visualiser.propTypes = {
  changeNumber: PropTypes.number
};

export default Visualiser;
