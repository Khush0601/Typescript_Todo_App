import React, { useState } from 'react'
import "./App.css"
import InputField from './Components/inputField'
import { Todo } from './model'
// // defining types:
// let name:unknown;
// name=true
// let age:number;
// let isStudent:boolean;
// let hobbies:string[];
// hobbies=['helllo','hiii']
// let role:[number,string] 
// role=[5,'kh']

// //object defining:
// interface Person{
//   name:string,
//   age:number,
// }

// interface Guy extends Person{
//   proffession:string
// }
// let newperson:Guy={
//   name:'kh',
//   age:6,
//   proffession:'engineer'
// }

// //type:

// type X={
//   a:string,
//   b:number
// }

// type Y=X & {
//   c:string,
//   d:number
// }

// let y:Y={
//   a:'string',
//   b:7,
//   c:'jio',
//   d:6
// }

// //interface and type together:
// interface Person{
//   name:string,
//   age:number,
// }
// type U=Person &{
//   a:string,
//   b:number,
// }

// let v:U={
//   name:'khu',
//   age:9,
//   a:'kkkk',
//   b:7

// }



// // for arrOfObjects:
// let lotsOfPeople:Person[];
// lotsOfPeople=[
//   {
//     name:'khus',
//     age:6
//   }
// ]

// // defining a function:

// let printName:(name:string)=>never;
const App:React.FC = () => {
const [todo,setTodo]=useState<string>("")
const [todos,setTodos]=useState<Todo[]>([])// this will contain all or todos

const handleAdd=(e:React.FormEvent)=>{
e.preventDefault()
}
console.log(todo)
  return (
    <div className='app'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  )
}

export default App