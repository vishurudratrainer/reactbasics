export default function DogReducer(
  state = { message: null, status: null },
  action
) {
  if (action) {
    console.log(action)
    if (action.type === "DOG_FETCHED") {
      return { ...state, message: action.data.message, status: action.data.status };
    }
  }
  return state;
}
