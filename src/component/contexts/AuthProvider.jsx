import useLocalStorage from "../../hooks/useLocalStorage";
import { AuthContext } from "./authContext";

const AuthProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("data", {
    isLoggedIn: false,
    username: "",
  });

  const login = (username) => {
    setData({ isLoggedIn: true, username });
  };

  const logout = () => {
    setData({ isLoggedIn: false, username: "" });
  };

  return (
    <AuthContext.Provider value={{ ...data, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
