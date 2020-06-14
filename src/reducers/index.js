// every Reducer you write should be a pure function with no side-effects —
// No API calls or updating a value outside the scope of the function.

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    // BAD EXAMPLE: Never mutate state
    // case "SET_TECHNOLOGY":
    //   state.tech = action.text;
    //   return state;

    case 'SET_TECHNOLOGY':
      return {
        ...state,
        tech: action.text
      };

    default:
      return state
  }
}
