const initialState = { photoItem: [{photo:"",id:0}] };

console.log("init", initialState);
const fill_array = "Fill_ARRAY";

export default function arrayForModal(state = initialState, action) {
  switch (action.type) {
    case fill_array:
      return { ...state, photoItem: [state.photoItem[0] = action.payload[0]] };

    default:
      return state;
  }
}

export const setArrayForModal = (array) => ({
  type: fill_array,
  payload: array,
});
