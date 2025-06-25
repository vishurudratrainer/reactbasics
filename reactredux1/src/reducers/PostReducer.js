export default function PostReducer(state = { formData: {}, res: {} }, action) {
  if (action) {
    if (action.type === "POST_DATA_CAPTURE") {
      let formDataFromAction = action.formData;
      let modifiedData = Object.assign({}, state.formData, formDataFromAction);
      return { ...state, formData: modifiedData };
    }
    if (action.type === "SAVED_POST_DATA") {
      return { ...state, res: action.result };
    }
  }
  return state;
}
