const initialState = {
  status: false,
};
const get_status = "GET_STATUS";

export default function sidebarChecker(state = initialState, action) {
  switch (action.type) {
    case get_status:
      return { ...state, status: action.payload };

    default:
      return state;
  }
}

export const setStatusSidebar = (status) => ({
  type: get_status,
  payload: status,
});
