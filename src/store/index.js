import { createStore, combineReducers } from "redux";
import companyreducer from "./reducer/companyReducer";
import gamereducer from "./reducer/gameReducer";

const allReducer = combineReducers({
  company: companyreducer,
  game: gamereducer,
});

const initialStates = {
  game: { name: "FootBall" },
  company: { name: "Glocify" },
};

const store = createStore(
  allReducer,
  initialStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//store.dispatch(update_compnay);

export default store;
