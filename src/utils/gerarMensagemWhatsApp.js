function gerarMensagemWhatsApp(){
     const mensagem = "gostaria de fazer o pedido"


        const url = `https://wa.me/5547997688933?text=${encodeURIComponent(mensagem)}`

        window.open(url, '_blank')

}

export default gerarMensagemWhatsApp