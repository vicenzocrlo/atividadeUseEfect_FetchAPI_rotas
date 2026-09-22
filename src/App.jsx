import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import Sobre from "./pages/Sobre";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="app">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<UserList />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}

export default App;
