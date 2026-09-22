import { Link } from "react-router-dom";

// Link funciona como uma tag <a>, mas troca de página sem
// recarregar o navegador (sem "piscar" a tela).
function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/usuarios">Usuários (API)</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}

export default Menu;
