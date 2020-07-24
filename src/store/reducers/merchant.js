export const merchantState = {
  name: "Bikaner Shop",
};

export const merchantReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
