import "./CategoryFilter.css"

function CategoryFilter({categoria, setCategoria}){

    const categorias = [
        "Todos",
        "Bolos",
        "Pães",
        "Doces"
    ]
    return(
        <div className="categorias">
            {categorias.map((nomeCategoria) =>
        
                <button 
                    key={nomeCategoria}
                    className={categoria === nomeCategoria ? "ativo" : ""}
                    onClick={() => setCategoria(nomeCategoria)}
                >
                    {nomeCategoria}
                </button>

           
            )}
        </div>
        
    )
}

export default CategoryFilter