import { useState, useEffect, useRef } from "react";
import ToDoItem from "./ToDoItem";
import { MdOutlineAddBox } from "react-icons/md";

type Todo = {
  id: number;
  text: string;
  completed: boolean; //ทำแล้วหรือยัง
};

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const isFirstLoad = useRef(true); 

  // โหลดจาก localStorage รอบแรก
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  // บันทึกลง localStorage (ยกเว้นรอบแรก)
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return; //  ข้าม setItem รอบแรก
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      completed: false,
    };
    setTodos((prevtodo) => [newTodo, ...prevtodo]);
    setInput("");
  };

  const toggleItem = (id: number) => {
    // prevtodos[ ] todo{ }
    setTodos((prevtodos) =>
      prevtodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const deleteItem = (id: number) => {
    setTodos((prevtodos) =>
      prevtodos.filter((todo) => {
        if (todo.id != id) {
          return todo;
        }
      })
    );
  };

  // console.log("input", input);
  // console.log("todos", todos);
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
        return (
          <ToDoItem
            key={id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};
export default ToDoList;
