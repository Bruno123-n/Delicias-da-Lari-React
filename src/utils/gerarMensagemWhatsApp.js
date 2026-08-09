import formatPrice from "../utils/formatPrice"
const NUMERO_WHATSAPP = "5547997688933"

function gerarMensagemWhatsApp(carrinho, endereco, observacaoGeral) {
  const total = carrinho.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade * produto.preco
  }, 0)

  let textoEndereco

  if (endereco && endereco.rua) {
    textoEndereco = `📍Endereço de Entrega:
Rua: ${endereco.rua}, Nº ${endereco.numero || "S/N"}
Bairro: ${endereco.bairro}
Cidade: ${endereco.cidade} - ${endereco.uf}
CEP: ${endereco.cep}`
  } else {
    textoEndereco = `📍 *Entrega:* Retirada no local`
  }

  const itens = carrinho.map((produto) => {
    const subtotal = produto.preco * produto.quantidade
    return `•  ${produto.quantidade} x ${produto.nome} - ${formatPrice(subtotal)}`
  });
  const pedido = itens.join("\n")

  const textoObs = observacaoGeral
    ? `\n📌 *Observações:* ${observacaoGeral}\n`
    : ""

  const mensagem = `Olá!

Gostaria de fazer o seguinte pedido:

${pedido}

Total: ${formatPrice(total)}

${textoEndereco}
${textoObs}

Aguardo a confirmação. Obrigado!`

// Detecta se o usuário está acessando por um celular
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Se for celular, usa o link direto do App (wa.me)
// Se for computador, usa o WhatsApp Web (que não quebra o emoji!)
const baseUrl = isMobile 
  ? `https://wa.me/${NUMERO_WHATSAPP}?text=` 
  : `https://web.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=`

const url = `${baseUrl}${encodeURIComponent(mensagem)}`

window.open(url, "_blank")
}

export default gerarMensagemWhatsApp
