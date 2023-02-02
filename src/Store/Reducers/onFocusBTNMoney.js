const initialState = { total: 0 };

const set50 = "SET_50";
const set100 = "SE_100";
const set200 = "SET_200";
export default function onFocusBTNMoney(state = initialState, action) {
  switch (action.type) {
    case set50:
      return { ...state, total: action.payload };
    case set100:
      return { ...state, total: action.payload };
    case set200:
      return { ...state, total: action.payload };
    default:
      return state;
  }
}

export const setDesiredAmount = (total) => ({ type: set100, payload: total });
