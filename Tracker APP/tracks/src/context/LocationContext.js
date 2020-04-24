import CreateDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return { ...state, name: "", locations: [] };
    case "change_name":
      //console.log("change name");
      return { ...state, name: action.payload };
    case "add_location":
      //console.log("add location", action.payload);
      return { ...state, locations: [...state.locations, action.payload] };
    case "stop_recording":
      return { ...state, recording: false };
    case "start_recording":
      return { ...state, recording: true };
    case "add_current_location":
      // console.log("switch add curr location");
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

const changeName = (dispatch) => (name) => {
  //console.log(name);
  dispatch({ type: "change_name", payload: name });
  //console.log("after calling", name);
};
const startRecording = (dispatch) => () => {
  //console.log("inside start");
  dispatch({ type: "start_recording" });
  //console.log("called and came back value of recording is should be true now ");
};

const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};

const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });
  //console.log(recording);
  if (recording) {
    dispatch({ type: "add_location", payload: location });
  }
};

const reset = (dispatch) => () => {
  dispatch({ type: "reset" });
};
export const { Context, Provider } = CreateDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName,
    reset,
  },
  {
    name: "",
    recording: false,
    locations: [],
    currentLocation: null,
  }
);
