import { useState } from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        if (inputValue.trim()){
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new Todo"></input>       
            <button type="submit">Add todo</button>
        </form>
        <ul>
            {todos.map((m, index) => (
                <li key={index}>{m}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList