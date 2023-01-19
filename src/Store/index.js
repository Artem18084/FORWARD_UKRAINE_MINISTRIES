import { applyMiddleware, combineReducers, createStore } from "redux";
import positionReportPhoto from "./Reducers/positionReportPhoto";
import { composeWithDevTools } from "redux-devtools-extension";
import inputMoneyAmount from "./Reducers/inputMoneyAmount";
import sidebarChecker from "./Reducers/sidebarChecker";

const rootReducer = combineReducers({
  positionReportPhoto: positionReportPhoto,
  inputMoneyAmount:inputMoneyAmount,
  sidebarChecker:sidebarChecker
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);


