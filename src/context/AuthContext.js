import createDataContext from "./createDataContext";

const authReducer = (state, actions) => {
  const { type, payload } = actions;

  switch (type) {
    default:
      return state;
  }
};

export const { Context, Provider } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
