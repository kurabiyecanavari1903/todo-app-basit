import { useState } from 'react'
import './App.css'

function App() {
  
  const [todos, setTodos] = useState([])
  const [inputText, setInputText] = useState("")

const addTodo = () => {
const newTodo = {
  id: Date.now(),
  desc: inputText,
  isCompleted: false,
  isUpdated: false,
}
setTodos([...todos, newTodo])
setInputText("")
}

const deleteTodo = (id) => {
  console.log(todos.find((todo) => todo.id == id));
const deletedTodos = todos.filter((todo) => todo.id != id)
console.log(deletedTodos);
setTodos(deletedTodos)
}



  return (
  <div className='min-h-screen flex items-center justify-center bg-white'> 

    <div className='bg-red-600 shadow-2xl rounded-3xl p-20'>


      {/* title kısmı */}
      <h1 className='text-3xl font-bold text-center mb-5'>To-Do List</h1>
      <div className='mb-4 flex'>
        <input onChange={(e) => {
          console.log(e.target.value);
          setInputText(e.target.value)
        } } type='text' placeholder='Yapacaklarını yaz...' value={inputText} className='px-2 py-2 border rounded-l-lg focus:outline-none'/>
        <button onClick={addTodo} className='bg-amber-400 text-white px-5 py-2 rounded-r-lg hover:bg-amber-500'>Ekle +</button>
      </div>

      {/* todo kısmı */}
      <div>
        {
          todos.map((todo) => (
            <div key={todo.id} className='flex gap-2'>
              {
                todo.isUpdated ? <input value={todo.desc} type="text" /> : <p>{todo.desc}</p>
              }
              <button onClick={() => deleteTodo(todo.id)} className='bg-white text-black'>Sil</button>
              <button onClick={() =>  setTodos(prev => ({
                ...prev,
                isUpdated: true
              }))} className='bg-white text-black'>Düzenle</button>
            </div>
          ))
        }
      </div>


    </div>
  </div>
  )
}

export default App
