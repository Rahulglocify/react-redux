import React from "react";
import "./App.css";
import store from "./store/index";
import update_compnay from "./store/action/companyActions";
import update_game from "./store/action/gameActions";
import { connect } from "react-redux";
function App(props) {
  // function updateCompany() {
  //   store.dispatch(update_compnay);
  // }

  // function updateGame() {
  //   store.dispatch(update_game);
  // }
  return (
    <div className="App">
      <h1>Redux Learn</h1>
      Company Name : {props.company.name}
      <button onClick={props.updateCompany}>Update Name</button>
      <br />
      Game Name : {props.game.name}
      <button onClick={props.updateGame}>Update</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    company: state.company,
    game: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCompany: () => {
      dispatch(update_compnay);
    },

    updateGame: () => {
      dispatch(update_game);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
