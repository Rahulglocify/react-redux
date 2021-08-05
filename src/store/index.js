import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import companyreducer from "./reducer/companyReducer";
import gamereducer from "./reducer/gameReducer";
import userreducer from "./reducer/userReducer";

const allReducer = combineReducers({
  company: companyreducer,
  game: gamereducer,
  users: userreducer,
});

const initialStates = {
  game: { name: "FootBall" },
  company: { name: "Glocify", email: "glocify@gmail.com" },
  users: [],
};

const middleware = [thunk];

const store = createStore(
  allReducer,
  initialStates,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//store.dispatch(update_compnay);

export default store;
