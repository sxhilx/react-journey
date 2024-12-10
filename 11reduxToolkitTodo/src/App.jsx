import AddTodos from './components/AddTodos'
import Todos from './components/Todos'
import './App.css'


function App() {

  return (
    <div >
      <h1 className='text-2xl font-bold text-slate-100'>Todo App with Redux ToolKit</h1>
      <AddTodos/>
      <Todos/>
    </div>
  )
}

export default App
