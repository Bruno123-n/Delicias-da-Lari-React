import { useState, useEffect } from 'react';

export function useCart() {
    // 1. Carrega do localStorage na primeira execução
  const [carrinho, setCarrinho] = useState(() => {
    try {
        const carrinhoSalvo = localStorage.getItem("carrinho")
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [] 
    } catch (error){
        console.error("Erro ao carregar carrinho do localStorage:", error)
        return []
    } 
  })

  useEffect(() => {
    try {
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    } catch (error) {
        console.error("Erro ao salvar carrinho no localStorage:", error)
    }
    
  }, [carrinho]) 
  
//   console.log(carrinho)

  // Adiciona produto ou aumenta a quantidade se já existir
  const adicionarAoCarrinho = (produto) => {
    setCarrinho((itensAnteriores) => {
        //item.id =>  faz referencia ao parametro do find (item) ao unico item que esta entragando naquela hr, se a comparação for (false) ele continua comparando item por item ate achar um igual(true) ( 1 === 3 ) => false, ( 2 === 3 ) => false, ( 3 === 3) => true, para de procurar e retorna aqui
        // produto.id => faz referencia a quem esta sendo clicado
      const itemExistente = itensAnteriores.find((item) => item.id === produto.id);

      if (itemExistente) {
        return itensAnteriores.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...itensAnteriores, { ...produto, quantidade: 1 }];
    });
  };

  // Aumenta a quantidade em +1
  const aumentarQuantidade = (id) => {
    setCarrinho((itensAnteriores) =>
      itensAnteriores.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };

  // Diminui a quantidade em -1 (e remove se chegar a 0)
  const diminuirQuantidade = (id) => {
    setCarrinho((itensAnteriores) =>
      itensAnteriores
        .map((item) =>
            //item.id => é o item atual percorrido //id => (id) => vem de quem chama (onclick)
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  // Remove o produto direto do carrinho
  const removerDoCarrinho = (id) => {
    setCarrinho((itensAnteriores) =>
      itensAnteriores.filter((item) => item.id !== id)
    );
  };

  // Limpa todo o carrinho (útil após finalizar o pedido)
  const limparCarrinho = () => {
    setCarrinho([]);
  };

  // Calcula o valor total de todos os itens
  const valorTotal = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  // Quantidade total de itens somados
  const totalItens = carrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  return {
    carrinho,
    adicionarAoCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
    limparCarrinho,
    valorTotal,
    totalItens,
  };
}