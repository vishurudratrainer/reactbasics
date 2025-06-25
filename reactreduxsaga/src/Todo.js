

import { useDispatch, useSelector } from "react-redux";


const Todo =()=>{

    const dispatch = useDispatch()
    const data = useSelector(state=>state.todos)
    const sendTodo=()=>dispatch({type:"FETCH_TODO"})

    return(<div>
        <button onClick={sendTodo}>FETCH_TODO</button>
        <h1>{JSON.stringify(data)}</h1>

    </div>)

}

export default Todo