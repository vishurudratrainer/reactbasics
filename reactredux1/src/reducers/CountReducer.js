export default function CountReducer(state = { count: 0 }, action) {
  if (action) {
    switch (action.type) {
      case "INC":
        return { ...state, count: state.count + 1 };
       case "DEC":
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  }
  return state;
}
