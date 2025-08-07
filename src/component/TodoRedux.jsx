import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTask, editTask } from "./redux/todoSlice";
import ModalTodo from "./ModalTodo";

function TodoRedux() {
  const [isModalTodoOpen, setIsModalTodoOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center p-5">
        <TodoForm openModalTodo={() => setIsModalTodoOpen(true)} />
      </div>

      <ModalTodo
        isOpen={isModalTodoOpen}
        onClose={() => setIsModalTodoOpen(false)}
      >
        <TodoList />
      </ModalTodo>
    </>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [editingTitle, setEditingTitle] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleRemove = (title) => {
    dispatch(removeTask(title));
  };

  const handleToggle = (title) => {
    dispatch(toggleTask(title));
  };

  const handleEdit = (todo) => {
    setEditingTitle(todo.title);
    setNewTitle(todo.title);
  };

  const handleSaveEdit = () => {
    if (newTitle.trim() !== "" && editingTitle !== null) {
      dispatch(editTask({ oldTitle: editingTitle, newTitle: newTitle.trim() }));
      setEditingTitle(null);
      setNewTitle("");
    }
  };

  return (
    <section className="flex flex-col gap-2 pt-5">
      {todos.length === 0 && (
        <p>Todo masih kosong. Silahkan tambah todo dengan form.</p>
      )}
      {todos.map((todo, idx) => (
        <div
          className="relative cursor-pointer border border-gray-700 rounded p-2"
          key={idx}
        >
          {editingTitle === todo.title ? (
            <div className="flex gap-3">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border border-gray-400 px-2 py-2 rounded w-full mb-2"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleSaveEdit}
                  className="border px-4 rounded"
                >
                  Simpan
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <div>
                  <p>
                    <span className="text-blue-500 font-semibold">Judul:</span>{" "}
                    {todo.title}
                  </p>
                  <div onClick={() => handleToggle(todo.title)}>
                    <p>{todo.isCompleted ? "Selesai" : "Belum Selesai"}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEdit(todo)}
                  className="border px-4 py-1 rounded mt-2 mx-5"
                >
                  Edit
                </button>
              </div>
              <div
                className="absolute top-5 right-3 cursor-pointer text-red-500"
                onClick={() => handleRemove(todo.title)}
              >
                X
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

function TodoForm({ openModalTodo }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.todo.value.trim();
    if (!title) return;

    dispatch(addTask({ title, isCompleted: false }));
    e.target.todo.value = "";
  };

  return (
    <form className="flex flex-col gap-2 w-[300px]" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Judul Todo"
        className="border border-black p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
      <button
        type="button"
        onClick={openModalTodo}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Lihat TodoList
      </button>
    </form>
  );
}

export default TodoRedux;
