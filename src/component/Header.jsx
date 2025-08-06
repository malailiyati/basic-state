import React, { useContext } from "react";
import { AuthContext } from "./contexts/authContext";

function Header() {
  const { username, isLoggedIn, logout } = useContext(AuthContext);
  return (
    <header className="bg-gray-300 flex justify-between items-center py-3 px-7">
      <h1 className="font-bold text-[30px]">Minitask</h1>

      {isLoggedIn && (
        <div className="flex items-center gap-4">
          <p>{username}</p>
          <button
            className="border rounded bg-white py-1 px-4"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
