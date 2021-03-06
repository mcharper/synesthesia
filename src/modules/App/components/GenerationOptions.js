import React from "react";
import PropTypes from "prop-types";

const GenerationOptions = ({ isPlaying, seed, onRandomise, onSeedChange }) => {
  if (isPlaying) {
    return (
      <form className="form">
        <div className="generation-options row">
          <div className="form-group col-md-12">
            <label htmlFor="seed">Seed (try entering your own)</label>
            <input
              type="text"
              className="form-control form-control-lg text-center seed-input"
              id="seed"
              onChange={onSeedChange}
              placeholder="A word or phrase to generate music from"
              value={seed}
              disabled={!isPlaying}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="seed">Or generate a random seed</label>
            <button type="button" disabled={!isPlaying} className="btn btn-outline-light btn-lg btn-block" onClick={onRandomise}>
              Randomise!
            </button>
          </div>
        </div>
      </form>
    );
  }

  return null;
};

GenerationOptions.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  seed: PropTypes.string.isRequired,
  onRandomise: PropTypes.func.isRequired,
  onSeedChange: PropTypes.func.isRequired
};

export default GenerationOptions;
