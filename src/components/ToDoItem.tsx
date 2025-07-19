const ToDoItem = ({ id, text }: { id: number; text: string }) => {

  console.log("id",id,"text",text)

  return <div>{text}</div>;
};
export default ToDoItem;
