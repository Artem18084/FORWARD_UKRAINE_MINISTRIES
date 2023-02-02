const initialState = { number: 0};
const increment = "INCREMENT";
const decrement = "DECREMENT";

export default function arrowValue(state = initialState, action) {
  switch (action.type) {
    case increment:
      return { ...state, number:action.payload +=1};
    case decrement:
      return { ...state, number:action.payload -=1};
    default:
      return state;
  }
}


export const setArrowValueNext = (num) => ({
    type: increment,
    payload: num,
  });
  
  export const setArrowValuePrev = (num) => ({
    type: decrement,
    payload: num,
  });
  