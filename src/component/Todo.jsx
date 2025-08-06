import React, { useContext, useState } from "react";
import { counterContext } from "./contexts/counter/counterContext";

function TodoForm() {
  const { state, dispatch } = useContext(counterContext);
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <>
      <div>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="add todo"
            className="border px-4 py-2 rounded my-5"
          />
          <button className="bg-gray-300 py-2 px-5 mx-5 rounded" type="submit">
            Add
          </button>
        </form>

        <TodoList
          todos={state}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
}

function TodoList({ todos = [], handleToggle, handleDelete }) {
  if (todos.length === 0) {
    return <p>Belum ada todo</p>;
  }
  return (
    <>
      <ul className="w-[200px]">
        <p className="font-bold">To-do List</p>
        {todos.map((todo) => (
          <li className="flex justify-between items-center" key={todo.id}>
            <p onClick={() => handleToggle(todo.id)}>{todo.title}</p>
            <p className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
              x
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoForm;
