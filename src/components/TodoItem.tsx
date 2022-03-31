import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  id: string;
  text: string;
  onDeleteTodo: (todoId: string) => void;
}> = (props) => {
  const deleteHandler = () => {
    props.onDeleteTodo(props.id);
  };

  return (
    <li id={props.id} onClick={deleteHandler} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
