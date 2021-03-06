import * as actions from "./actionTypes";
import * as synth from "../../synth/synth";

export const Play = () => {
  return (dispatch, getState) => {
    const generatedSettings = synth.play(getState().song, getState().seed, null, () => {
      dispatch(ChangeVisual());
    });
    dispatch({
      type: actions.SYNTH_PLAY,
      payload: generatedSettings
    });
  };
}

export const Stop = () => {
  return dispatch => {
    dispatch({
      type: actions.SYNTH_STOP
    });
  };
};

export const PlayButtonClick = () => {
  return (dispatch, getState) => {
    getState().app.isPlaying ? dispatch({ type: actions.SYNTH_STOP }) : dispatch({ type: actions.SYNTH_PLAY });
  };
};

export const SetInitialSeed = newSeed => {
  return dispatch => {
    dispatch({ type: actions.UPDATE_SEED, payload: newSeed });
    dispatch({ type: actions.SYNTH_PLAY });
  };
};

export const SetSeed = newSeed => {
  return (dispatch, getState) => {
    dispatch({ type: actions.UPDATE_SEED, payload: newSeed });
    synth.playDebounced(getState().song, newSeed, generatedSettings => {
      dispatch({ type: actions.UPDATE_GENERATED_SETTINGS, payload: generatedSettings });
    });
  };
};

export const RandomiseSeed = () => {
  const randomSeed = new Date().getTime().toString();
  return SetSeed(randomSeed);
};

export const SetSong = song => {
  return (dispatch, getState) => {
    var generatedSettings;
    dispatch({ type: actions.SET_SONG, payload: song });
    generatedSettings = synth.play(1, getState().seed, null, () => {
      dispatch(ChangeVisual());
    });
    console.log("Gen:" + JSON.stringify(generatedSettings));
    dispatch({
      type: actions.SYNTH_PLAY,
      generatedSettings: generatedSettings
    });
  };  
};

export const ChangeVisual = () => {
  console.log("ChangeVisual");
  return dispatch => {
    dispatch({ type: actions.CHANGE_VISUAL, payload: {} });
  };
};
