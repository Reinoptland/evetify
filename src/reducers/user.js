import { USER_CREATED } from "../actions/users";

export default (state = { userCreated: false }, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return { ...state, userCreated: true };

    default:
      return state;
  }
};
