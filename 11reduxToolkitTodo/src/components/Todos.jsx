import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const [editableTodo, setEditableTodo] = useState(null)
    const [input, setInput] = useState('')
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const editTodo = (todo) => {
        if(editableTodo === todo.id){
            dispatch(updateTodo({id: todo.id, text: input}))
            setEditableTodo(null);
            setInput('')
        }else{
            setEditableTodo(todo.id)
            setInput(todo.text)
        }
    }

    return (
        <div className="max-w-xl mx-auto p-4">
            <ul className="list-none space-y-4">
                {todos.map((todo) => (
                    <li
                        className="flex justify-between items-center bg-zinc-900 px-6 py-3 rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-zinc-800"
                        key={todo.id}
                    >
                        <div className="flex-1 m-2">
                            <input 
                                type="text" 
                                readOnly={editableTodo !== todo.id} 
                                value={ editableTodo === todo.id ? input : todo.text} 
                                onChange={(e) => setInput(e.target.value)} 
                                className={`w-full text-white bg-transparent outline-none transition-all ${(editableTodo === todo.id ? 'border-b-2' : 'border-blue-500')}`} 
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => { editTodo(todo) }}
                                className="text-white bg-blue-600 hover:bg-blue-700 py-1 px-3 rounded-lg transition-all focus:outline-none shadow-md hover:shadow-lg"
                            >
                                {editableTodo === todo.id ? 'Save' : 'Edit'}
                            </button>

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="flex items-center justify-center w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full transition-all focus:outline-none shadow-md hover:shadow-lg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
