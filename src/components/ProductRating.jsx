const estrelas = [1,2,3,4,5]

function ProductRating({ avaliacao }) {

    return (
        <p className="rating">
            Avaliação:
            {estrelas.map((estrela)=>
                <span key={estrela}>
                    {estrela <= avaliacao ? "⭐" : "☆"}
                </span>
            )}
            {" "}({avaliacao})
        </p>
    )
}

export default ProductRating;