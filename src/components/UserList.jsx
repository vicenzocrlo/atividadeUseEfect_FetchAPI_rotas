import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

/*
  ATIVIDADES PROPOSTAS (arquivo UseEffect_API):
  1) Adicionar email e telefone na listagem       -> feito no <li> abaixo
  2) Criar botão "Recarregar usuários"             -> função buscarUsuarios()
  3) Mostrar mensagem "Nenhum usuário encontrado"  -> condicional no final

  Deixo comentado abaixo a versão "Exemplo 5" original do material,
  só para efeito de comparação com o que foi adicionado. Você pode
  apagar esse comentário na entrega, ele está aqui só como referência.

  function UserList(){
    const [usuarios, setUsuarios] = useState([]);
    const [busca, setBusca] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(dados => {
          setUsuarios(dados);
          setLoading(false);
        });
    }, []);
    ...
  }
*/

function UserList() {
  const [usuarios, setUsuarios] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  // Extraímos a busca para uma função separada porque ela vai ser
  // chamada em dois momentos: quando o componente carrega (dentro do
  // useEffect) e quando o usuário clica em "Recarregar usuários".
  function buscarUsuarios() {
    setLoading(true);
    setErro(false);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dados) => {
        setUsuarios(dados);
        setLoading(false);
      })
      .catch(() => {
        setErro(true);
        setLoading(false);
      });
  }

  // Array de dependências vazio [] = roda só uma vez, quando o
  // componente é montado na tela (o "carregamento inicial").
  useEffect(() => {
    buscarUsuarios();
  }, []);

  // filter() cria uma nova lista só com os usuários cujo nome
  // contém o texto digitado na busca (comparando em minúsculas
  // para a busca não ser sensível a maiúsculas/minúsculas).
  const filtrados = usuarios.filter((user) =>
    user.name.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <p className="status">Carregando...</p>;
  if (erro) return <p className="status erro">Erro ao carregar dados</p>;

  return (
    <div className="pagina">
      <h2>Usuários</h2>

      <div className="acoes">
        <SearchBar busca={busca} setBusca={setBusca} />
        {/* Atividade 2: botão para recarregar a lista da API */}
        <button onClick={buscarUsuarios}>Recarregar usuários</button>
      </div>

      {/* Atividade 3: mensagem quando a busca não encontra ninguém */}
      {filtrados.length === 0 ? (
        <p className="status">Nenhum usuário encontrado</p>
      ) : (
        <ul className="lista-usuarios">
          {filtrados.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong>
              {/* Atividade 1: email e telefone */}
              <br />
              📧 {user.email}
              <br />
              📞 {user.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
