import { UPDATE_COMPANY } from "../action/companyActions";

const companyreducer = (state = {}, { type, payload }) => {
  //First way to update using if condition
  // if (type === "UPDATE_COMPANY") {
  //   return { name: payload };
  // }

  // return state;

  // Second way to update using switch

  switch (type) {
    case UPDATE_COMPANY:
      return { name: payload };

    default:
      return state;
  }
};

export default companyreducer;
