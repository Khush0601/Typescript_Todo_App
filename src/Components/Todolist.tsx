import React from 'react'
import { Todo } from '../model'
 import './style.css'
import SingleTodo from './singleTodo'
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
     {todos.map((todo)=>{
       return (
       <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
       )
      })}
    </div>
  )
}

export default Todolist