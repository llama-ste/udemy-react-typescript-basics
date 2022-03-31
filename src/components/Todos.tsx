import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodoItem // onDeleteTodo.bind(null, item.id) 를 하는 방법도 있다.
            onDeleteTodo={todosCtx.deleteTodo}
            key={item.id}
            text={item.text}
            id={item.id}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
