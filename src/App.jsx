import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function App() {
  const [Todo, setTodo] = useState("")
  const [Todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  const [darkMode, setdarkMode] = useState(true)
  const handleMode = () => {
    setdarkMode(!darkMode)
  }
  const theme = {
    darkMode,
    handleMode,
    Cinput: darkMode ? 'slate-900' : 'blue-100',
    Ccontainer: darkMode ? 'slate-800' : 'blue-200',
    Cbg: darkMode ? 'slate-700' : 'blue-300',
    Chover: darkMode ? 'slate-600' : 'blue-400',
    Ctext: darkMode ? 'slate-200' : 'blue-900',
  };

  const toggleShowFinished = (e) => {
    setShowFinished(!showFinished);
  }
  useEffect(() => {
    if (localStorage.getItem("Todos")) {
      let TodosLocal = JSON.parse(localStorage.getItem("Todos"))
      setTodos(TodosLocal)
    }
  }, [])

  useEffect(() => {
    if (Todos.length) {
      localStorage.setItem("Todos", JSON.stringify(Todos)); // stringify to store objects (only strings in localStorage)
      console.log("Saved todos to localStorage:", JSON.stringify(Todos));
      console.log(localStorage.getItem("Todos"))
    }
  }, [Todos]); // or no []

  const handleEdit = (e, id) => {
    if (Todo.length < 1) {
      let TodoLocal = Todos.find(item => item.id === id)
      handleDelete(e, id)
      setTodo(TodoLocal.Todo)
    }
    else {
      alert("Save previous Todo first")
    }
  }
  const handleDelete = (e, id) => {

    let newTodos = Todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }
  const handleAdd = () => {

    setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }])
    setTodo("")
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name
    let newTodos = [...Todos]
    let output = newTodos.find(item => item.id === id)
    output.isCompleted = !output.isCompleted
    setTodos(newTodos)
  }
  return (
    <>
      <div className={`bg-${theme.Cinput} min-h-[100vh]`}>
        <Navbar props={theme} />
        <div className={`container mx-auto bg-${theme.Ccontainer} rounded-xl m-3 text-${theme.Ctext} min-h-[80vh] md:w-1/2`}>
          <div className={`add w-full bg-${theme.Cbg} rounded-xl p-3 px-5 flex justify-between`}>
            <h1 className='text-lg font-bold'>Add a todo</h1>
            <div className='flex gap-2'>
              <input onChange={handleChange} value={Todo} type="text" className={`bg-${theme.Cinput} lg:w-96 rounded-md outline-none px-2 `} placeholder="Enter todo here" />
              <button onClick={handleAdd} disabled={Todo.length < 1} className={`disabled:line-through disabled:bg-${theme.Cbg} bg-${theme.Cbg} text-sm font-semibold p-1 px-2 rounded-lg mx-1 hover:bg-${theme.Chover} transition-all duration-200`}>Save</button>
            </div>
          </div>
          <div className="todos flex flex-col gap-2 p-3">
            <div className='flex align-middle justify-between'>
              <h1 className='text-xl font-bold'>Your Tasks</h1>
              <div>
                <input onClick={toggleShowFinished} type="checkbox" id='show' checked={showFinished} value={showFinished} />
                <label className='font-bold text-md ml-1' htmlFor='show'> Show Finished</label>
              </div>
            </div>
            {Todos.length === 0 && <div className='text-2xl text-center mt-36'>Nothing here! Let's plan your day</div>}
            {Todos.map(item => {
              return (showFinished || !item.isCompleted) && <div key={item.id} className={`todo items-center flex justify-between bg-${theme.Cbg} rounded-md p-2`}>
                <div className='flex gap-2 items-center'>
                  <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} value={item.isCompleted} name={item.id} id="" />
                  <div className={` break-all ${item.isCompleted ? 'line-through' : ''}`} >
                    {item.Todo}
                  </div>
                </div>
                <div className="buttons min-w-16 ml-4 flex align-middle">
                  <button onClick={(e) => handleEdit(e, item.id)} className={`bg-${theme.Cbg} font-semibold h-8 w-7 p-1 text-lg rounded-lg hover:bg-${theme.Chover} transition-all duration-200`}><FaEdit /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className={`bg-${theme.Cbg} font-semibold h-8 w-7 p-1 text-xl  rounded-lg hover:bg-${theme.Chover} transition-all duration-200`}><MdDelete /></button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}
export default App
