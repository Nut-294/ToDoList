import { RiDeleteBin6Line } from "react-icons/ri";
const ToDoItem = ({
  id,
  text,
  completed,
  toggleItem
}: {
  id:number
  text: string;
  completed: boolean;
  toggleItem: (id: number) => void; //แค่เปลี่ยน state ไม่ได้คืนค่าอะไร

}) => {
  return (
    <div className="flex justify-between mb-2 p-2 bg-gray-50 rounded">
      <label className="flex items-center max-w-xs">
        <input
          type="checkbox"
          className="size-5 accent-green-600 mr-4"
          checked={completed}
          onChange={()=>toggleItem(id)}
        />

        <h2 className="flex-grow text-lg truncate">{text}</h2>
      </label>
      <button className="mx-2 text-red-500 hover:text-red-700 transition-colors">
        <RiDeleteBin6Line className="text-2xl" />
      </button>
    </div>
  );
};
export default ToDoItem;

{
  /* <h2 className={`flex-grow text-lg truncate ${!toggle ? "line-through italic" : ""}`}>AAA</h2> */
}
