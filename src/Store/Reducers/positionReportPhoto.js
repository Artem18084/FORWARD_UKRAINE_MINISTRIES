const initialState = {
  active: false,
};
const positionPhotoCase = "TOGGLE_STATE";

export default function positionReportPhoto(state = initialState, action) {
  switch (action.type) {
    case positionPhotoCase:
      return { ...state, active: action.payload };

    default:
      return state;
  }
}

export const setActivePosition = (active) => ({
  type: positionPhotoCase,
  payload: active,
});
