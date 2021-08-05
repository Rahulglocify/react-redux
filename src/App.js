import React from "react";
import "./App.css";
import store from "./store/index";
import update_compnay from "./store/action/companyActions";
import update_game from "./store/action/gameActions";
import { connect } from "react-redux";
import fetch_user from "./store/action/userActions";
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
      <button onClick={props.updateGame}>Update</button> <br />
      Users:
      <button onClick={props.fetchUser}>Fetch User</button>
      {props.users.length === 0 ? (
        <p>No User Found</p>
      ) : (
        props.users.map((user) => (
          <p key={user.id}>
            {user.id} {user.name} {user.email}
          </p>
        ))
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    company: state.company,
    game: state.game,
    users: state.users,
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

    fetchUser: () => {
      dispatch(fetch_user);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
