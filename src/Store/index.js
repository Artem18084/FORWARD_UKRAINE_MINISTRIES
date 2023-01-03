import { applyMiddleware, combineReducers, createStore } from "redux";
import positionReportPhoto from "./Reducers/positionReportPhoto";
import { composeWithDevTools } from "redux-devtools-extension";
import inputMoneyAmount from "./Reducers/inputMoneyAmount";

const rootReducer = combineReducers({
  positionReportPhoto: positionReportPhoto,
  inputMoneyAmount:inputMoneyAmount,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);


