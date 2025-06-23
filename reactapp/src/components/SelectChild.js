import SelectGrandChild from "./SelectGrandChild"


const SelectChild = (props) =>{
    return (<div>
        I am the Select Child
        <SelectGrandChild color={props.color}/>
    </div>)
}

export default SelectChild