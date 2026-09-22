// Componente "burro" (não tem estado próprio): ele só recebe o
// valor atual da busca (busca) e a função para atualizá-lo
// (setBusca), que vivem no componente pai (UserList).
function SearchBar({ busca, setBusca }) {
  return (
    <input
      className="search-bar"
      placeholder="Buscar usuário..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
  );
}

export default SearchBar;
