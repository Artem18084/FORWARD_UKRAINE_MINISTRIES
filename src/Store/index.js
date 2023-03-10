import { applyMiddleware, combineReducers, createStore } from "redux";
import positionReportPhoto from "./Reducers/positionReportPhoto";
import { composeWithDevTools } from "redux-devtools-extension";
import inputMoneyAmount from "./Reducers/inputMoneyAmount";
import sidebarChecker from "./Reducers/sidebarChecker";
import arrayForModal from "./Reducers/arrayForModal";
import activeModal from "./Reducers/activeModal";
import arrowValue from "./Reducers/arrowValue";

const rootReducer = combineReducers({
  positionReportPhoto: positionReportPhoto,
  inputMoneyAmount:inputMoneyAmount,
  sidebarChecker:sidebarChecker,
  arrayForModal:arrayForModal,
  activeModal:activeModal,
  arrowValue:arrowValue,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);


