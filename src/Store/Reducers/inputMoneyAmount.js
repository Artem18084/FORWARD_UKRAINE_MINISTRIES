const initialState = { amount: false ,flowAmount:false};
const fixedPayments = "give_fixedAmount";
const inputPayments = "give_flowAmount";

export default function inputMoneyAmount(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case fixedPayments:
      return { ...state, amount: payload };
    case inputPayments:
      return { ...state, flowAmount: payload ,amount:false};
    default:
      return state;
  }
}

export const setAmountMoney = (amount) => ({
  type: fixedPayments,
  payload: amount,
});

export const setFlowAmountMoney = (amount) => ({
  type: inputPayments,
  payload: amount,
});
