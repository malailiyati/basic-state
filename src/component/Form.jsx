import React, { useState, useContext } from "react";
import { AuthContext } from "./contexts/authContext";

function Form() {
  const [username, setUsername] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      setUsername("");
    }
  };
  return (
    <form
      className="w-fit mx-auto mt-10 p-4 border rounded shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="my-3">Login</h2>
      <input
        className="border rounded py-1 px-3"
        type="text"
        placeholder="masukkan nama"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      <button
        className="my-4 bg-blue-700 text-white py-2 px-6 w-full rounded-[10px]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
