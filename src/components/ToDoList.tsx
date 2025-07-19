import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: input,
    };
    console.log("newTodo", newTodo);
    setTodo((prevtodo) => [newTodo, ...prevtodo]);
    setInput("");
  };
  // console.log("input", input);
  console.log("todo", todo);
  return (
    <div className="max-w-md mx-auto bg-gray-100">
      <h1 className="text-3xl m-auto font-bold text-center">TodoList</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Add Todo"
          onChange={handleChange}
          className="flex-grow "
        />
        <button onClick={addTodo} className="">
          Add
        </button>
      </div>
      <div className="mt-40">{input}</div>
    </div>
  );
};
export default ToDoList;
