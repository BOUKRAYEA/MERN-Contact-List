const INTIAL_STATE = { contacts: [] };

export const Reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };

    default:
      return state;
  }
};
