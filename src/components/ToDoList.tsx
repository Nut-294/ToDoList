import { useState } from "react";
import ToDoItem from "./ToDoItem";
import { MdOutlineAddBox } from "react-icons/md";
type Todo = {
  id: number;
  text: string;
  toggle: boolean
};

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: input,
      toggle: true
    };
    setTodos((prevtodo) => [newTodo, ...prevtodo]);
    setInput("");
  };
  // console.log("input", input);
  console.log("todos", todos);
  return (
    <div className="max-w-md mx-auto bg-white rounded p-4 shadow">
      <h1 className="text-3xl mb-4 font-bold text-center">TodoList</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="flex-grow text-xl border-2 border-gray-300 rounded px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={addTodo}
          className="text-white text-4xl bg-green-600 rounded-md p-1 hover:bg-green-700 transition"
        >
          <MdOutlineAddBox />
        </button>
      </div>

      {todos.map((todo, id) => {
        return <ToDoItem key={id} id={todo.id} text={todo.text} />;
      })}
    </div>
  );
};
export default ToDoList;
