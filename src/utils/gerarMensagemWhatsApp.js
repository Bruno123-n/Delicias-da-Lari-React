import formatPrice from "../utils/formatPrice"










function gerarMensagemWhatsApp(carrinho){

        const total = carrinho.reduce((acumulador, produto) => {
                return acumulador + produto.quantidade * produto.preco
        },0);

        const itens = carrinho.map((produto) => {

                const subtotal = produto.preco * produto.quantidade;

                return `${produto.quantidade}x ${produto.nome} - ${formatPrice(subtotal)}`
                

        });
        const pedido = itens.join("\n");

        


        const mensagem = `Olá!

Gostaria de fazer o seguinte pedido:

${pedido}

Total: ${formatPrice(total)}

Aguardo a confirmação. Obrigado!
        `
        
        // console.log(mensagem);

        const url = `https://wa.me/5547997688933?text=${encodeURIComponent(mensagem)}`

        window.open(url, "_blank")


}

export default gerarMensagemWhatsApp
