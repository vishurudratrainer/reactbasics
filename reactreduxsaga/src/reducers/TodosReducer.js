


const TodosReducer =(state={todos:[]},action)=>{
    if(action){
        if(action.type==="TODOS_FETCHED"){
            return {...state,todos:action.data}
        }

    }
    return state

}

export default TodosReducer