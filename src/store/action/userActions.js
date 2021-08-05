export const UPDATE_USER = "UPDATE_USER";

const fetch_user = (dispatch) => {
  fetch("http://127.0.0.1:8000/api/users")
    .then((res) => res.json())
    .then((res) => dispatch({ type: UPDATE_USER, payload: res.data.users }));
};

export default fetch_user;
