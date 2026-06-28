import "./SearchBar.css"

function SearchBar({ busca, setBusca }) {
  return (
    <div className="search">
      <input
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar doce..."
      />
    </div>
  )
}

export default SearchBar