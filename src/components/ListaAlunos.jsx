import { useState } from "react";

/*
  Esta é a versão corrigida da "Prática — Lista de alunos com
  condicional" do material Review_Rotas. No arquivo original havia
  um bug: dentro de adicionarAluno() chamava-se setNome("") mas o
  estado se chama "aluno" (setAluno), não "nome". Corrigido abaixo.
*/
function ListaAlunos() {
  const [aluno, setAluno] = useState("");
  const [listaAlunos, setListaAlunos] = useState([]);

  function adicionarAluno() {
    if (aluno.trim() === "") return;
    setListaAlunos([...listaAlunos, aluno]);
    setAluno(""); // limpa o campo de texto depois de adicionar
  }

  return (
    <div className="pagina">
      <h2>Lista de Alunos</h2>
      <div className="acoes">
        <input
          type="text"
          placeholder="Nome do aluno"
          value={aluno}
          onChange={(e) => setAluno(e.target.value)}
        />
        <button onClick={adicionarAluno}>Adicionar</button>
      </div>

      {/* Operador ternário: mostra uma coisa OU outra dependendo da condição */}
      {listaAlunos.length === 0 ? (
        <p className="status">Nenhum aluno cadastrado</p>
      ) : (
        <ul className="lista-usuarios">
          {listaAlunos.map((nomeAluno, index) => (
            <li key={index}>{nomeAluno}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaAlunos;
