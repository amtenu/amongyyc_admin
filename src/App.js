import React, { useContext} from "react";
import { Route, Routes, BrowserRouter,Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {userInputs,taskInputs} from "./formSource";
import "./styles/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";




function App() {
  const { darkMode } = useContext(DarkModeContext);
  
  const {currentUser} = useContext(AuthContext);
  
  

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  
  return (

    <div  className={ darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth> } />
            
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new User" />}
              />
            </Route>
            <Route path="tasks">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route path=":taskId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={taskInputs} title="Add new Task" />}
              />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
