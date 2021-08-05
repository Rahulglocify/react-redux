import { UPDATE_USER } from "../action/userActions.js";

const userreducer = (state = {}, { type, payload }) => {
  switch (type) {
    case UPDATE_USER:
      return payload;

    default:
      return state;
  }
};

export default userreducer;
