export default function DogReducer(
  state = { message: null, status: null ,loading:false},
  action
) {
  if (action) {
    console.log(action)

    if(action.type ==="FETCH_DOG"){
        return {...state,loading:true}
    }
    if (action.type === "DOG_FETCHED") {
      return { ...state, message: action.data.message, status: action.data.status,loading:false };
    }
  }
  return state;
}
