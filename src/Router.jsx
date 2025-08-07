import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ShoppingApp from "./component/ShoppingApp";
import { useContext } from "react";
import { AuthContext } from "./component/contexts/authContext";
import LoginForm from "./component/Form";
import Header from "./component/Header";
import TodoForm from "./component/Todo";
import TodoRedux from "./component/todoRedux";
import SurveyPage from "./component/SurveyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RouteLayout />}>
          <Route path="/" element={<ShoppingApp />}></Route>
          <Route path="/todo" element={<TodoForm />} />
          <Route path="/todoredux" element={<TodoRedux />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function RouteLayout() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Header />
      {isLoggedIn ? <Outlet /> : <LoginForm />}
    </>
  );
}

export default Router;
