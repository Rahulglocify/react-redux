import { UPDATE_GAME } from "../action/gameActions";

const gamereducer = (state = {}, { type, payload }) => {
  //First way to update using if condition
  // if (type === "UPDATE_GAME") {
  //   return { name: payload };
  // }
  // return state;

  //Second way to update using switch
  switch (type) {
    case UPDATE_GAME:
      return { name: payload };

    default:
      return state;
  }
};

export default gamereducer;
