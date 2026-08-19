// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";

// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import Chat from "./pages/Chat.jsx";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/chat" element={<Chat />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import "./App.css";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import FaceRegister from "./pages/FaceRegister.jsx";
// import FaceRegister from "./pages/faceregister.jsx";
import Chat from "./pages/Chat.jsx";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/face-register"
          element={<FaceRegister />}
        />

        <Route
          path="/chat"
          element={<Chat />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;