

let room = {color:"red",length:20,width:20}


const changeColor = (room,newColor)=>{
  //  room.color =newColor
  let copiedRoom = Object.assign({},room,{color:newColor,length:40})
    return copiedRoom
}
const changeColor1 = (room,newColor)=>{
  //  room.color =newColor
  let copiedRoom = {...room,color:newColor,length:40}//Spread operator
    return copiedRoom
}

console.log(changeColor(room,"yellow"))
console.log(changeColor1(room,"yellow"))

console.log(room)