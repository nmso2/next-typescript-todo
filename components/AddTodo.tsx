import { Box, Button, TextField } from "@mui/material";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import TodoList from "./TodoList";
interface Todo {
  id: number;
  text: string;
}
// Todo[]
type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

const AddTodo = () => {
  const [data, setData] = useState<Todo>();
  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }, []);

  console.log(todos);
  //   console.log(JSON.parse(localStorage.getItem("todos")));

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("todos")));
  }, [todos]);

  if (data?.length) {
    console.log(data);
  }

  const onRemoveTodo = (id: any) => {
    dispatch({ type: "REMOVE", id: id });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          inputRef={newTodoRef}
          label="Add Todo"
          variant="outlined"
        />
        <Button
          sx={{ marginLeft: "5px", padding: "10px 30px" }}
          variant="contained"
          onClick={onAddTodo}
        >
          Add
        </Button>
      </Box>
      <TodoList items={todos} onRemoveTodo={onRemoveTodo} />
    </>
  );
};

export default AddTodo;
