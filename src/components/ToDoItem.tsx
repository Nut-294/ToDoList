import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const ToDoItem = ({ id, text }: { id: number; text: string }) => {
  const [toggle, setToggle] = useState<boolean>(true);

  const toggleItem = () => {
    setToggle(!toggle);
    console.log("ไอดี :", id, "ข้อความ :", text, "toggle :", toggle);
  };

  return (
    <div className="flex justify-between mb-2 p-2 bg-gray-50 rounded">
      <label className="flex items-center max-w-xs">
        <input
          type="checkbox"
          className="size-5 accent-green-600 mr-4"
          onChange={toggleItem}
        />
        <h2 className={`flex-grow text-lg truncate ${!toggle ? "line-through italic" : ""}`}>{text}</h2>
      </label>

      <button className="mx-2 text-red-500 hover:text-red-700 transition-colors">
        <RiDeleteBin6Line className="text-2xl" />
      </button>
    </div>
  );
};
export default ToDoItem;
