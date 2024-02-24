import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterAccount from "./components/RegisterAccount";
import LoginAccount from "./components/LoginAccount";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RegisterAccount />,
  },
  {
    path: "/login",
    element: <LoginAccount />,
  },
]);

export default App;
