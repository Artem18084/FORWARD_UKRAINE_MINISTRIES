const initialState = {
  status: false,
};
const get_status = "GET_STATUS_MODAL";

export default function activeModal(state = initialState, action) {
  switch (action.type) {
    case get_status:
      return { ...state, status: action.payload };

    default:
      return state;
  }
}

export const setStatusModal = (status) => ({
  type: get_status,
  payload: status,
});
