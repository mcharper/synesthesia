import React from "react";
import PropTypes from "prop-types";

const Visualiser = ({ changeNumber }) => {
    return (
      <div>
        <p>Change Number {changeNumber}</p>
        <img src="https://picsum.photos/?random" />
      </div>
    );
};

Visualiser.propTypes = {
  changeNumber: PropTypes.number
};

export default Visualiser;
