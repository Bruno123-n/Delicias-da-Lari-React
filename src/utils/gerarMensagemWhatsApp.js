import formatPrice from "../utils/formatPrice";

function gerarMensagemWhatsApp(carrinho, endereco, observacaoGeral) {
  const total = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade * produto.preco;
  }, 0);

  let textoEndereco;

  if (endereco && endereco.rua) {
    textoEndereco = `Endereço de Entrega:
Rua: ${endereco.rua}
Bairro: ${endereco.bairro}
Cidade: ${endereco.cidade}
CEP: ${endereco.cep}`;
  } else {
    textoEndereco = `Endereço: Não informado / Retirada no local`;
  }

  const itens = carrinho.map((produto) => {
    const subtotal = produto.preco * produto.quantidade;
    return `${produto.quantidade} x ${produto.nome} - ${formatPrice(subtotal)}`;
  });
  const pedido = itens.join("\n");

  const emojiPin = String.fromCodePoint(0x1f4cc);

  const textoObs = observacaoGeral
    ? `\n${emojiPin} *OBSERVAÇÕES:* ${observacaoGeral}\n`
    : "";

  const mensagem = `Olá!

Gostaria de fazer o seguinte pedido:

${pedido}

Total: ${formatPrice(total)}

${textoEndereco}
${textoObs}

Aguardo a confirmação. Obrigado!`;

// Detecta se o usuário está acessando por um celular
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Se for celular, usa o link direto do App (wa.me)
// Se for computador, usa o WhatsApp Web (que não quebra o emoji!)
const baseUrl = isMobile 
  ? "https://wa.me/5547997688933?text=" 
  : "https://web.whatsapp.com/send?phone=5547997688933&text=";

const url = `${baseUrl}${encodeURIComponent(mensagem)}`;

window.open(url, "_blank");
}

export default gerarMensagemWhatsApp;
