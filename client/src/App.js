import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterAccount from "./components/RegisterAccount";
import LoginAccount from "./components/LoginAccount";
import Main from "./components/Main";
import Actions from "./components/Actions";
import LeaderBoard from "./components/LeaderBoard";
import Progress from "./components/Progress";
import Profile from "./components/Profile";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userSlice from "./slices/userSlice";
import { Toaster } from "react-hot-toast";
import AddTask from "./components/Admin/AddTask";
import AdminComponent from "./components/Admin/AdminComponent"
import EditTask from "./components/Admin/EditTask"
import AddBadge from './components/Admin/AddBadge'

function App() {
  
  const store = configureStore({
    reducer: {
      user: userSlice,
    },
  });

  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
      <Toaster />
    </Provider>
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
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Actions />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
     {
        path: "progress",
        element: <Progress />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admin",
        element: <AdminComponent />,
        children:[
          {
            path: "",
            element: <AddTask />,
          },
          {
            path: "editTask",
            element: <EditTask />

          },
          {
            path: "addBadge",
            element: <AddBadge />
          }
        ]
      }
    ],
  },
]);

export default App;
