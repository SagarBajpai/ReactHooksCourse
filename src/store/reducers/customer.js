export const customerState = {
  name: "Sagar Bajpai",
};

export const customerReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CUSTOMER_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
