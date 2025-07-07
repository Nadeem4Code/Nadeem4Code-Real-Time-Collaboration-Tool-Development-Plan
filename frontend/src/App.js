// frontend/src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./features/auth/Register.jsx";
import Login from "./features/auth/Login.jsx";
import PrivateRoute from "./utils/PrivateRoute.js";
import Home from "./Components/Home/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
