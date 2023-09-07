'use client'

import { useState } from 'react'
import { TodoObject } from './models/Todo';
import {v4 as uuid} from 'uuid'

const Page: React.FC = () => {
const [todo, setTodo] = useState<string> ('');
const [todol, setTodol] = useState<TodoObject[]>([]);
const addTodo = () => {
  setTodol([...todol, {id: uuid(), value: todo, done: false}])
  setTodo("");
}

const markTodoDone = (id: string) => {
setTodol(todol.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))

}
  return (
    <>
      <header className='bg-lime-500 p-4'>
<h1 className='text-3xl'>Lista de Tareas</h1>
      </header>
      <main className='p-4'>
        <input
        type="text"
        placeholder='Escriba una nueva tarea'
        className='p-2 rounded-lg border-slate-950 mr-5'
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        />
        <button className='border-4 rounded-md p-1' onClick={() => addTodo()}>Agregar tarea</button>
        <ul className='mt-5'>
          {
            todol.map(todo=>(
              <li onClick={()=>markTodoDone(todo.id)}
              className={`text-5xl ml-5 cursor-pointer ${todo.done ? 'line-through': 'no-underline' }`}
              >
                {todo.value}
              </li>
            ))
          }
          
        </ul>
      </main>
    </>
  )
}

export default Page;