# 🍰 Delícias da Lari - E-commerce de Doces Artesanais

Uma aplicação web moderna e responsiva para catálogo e pedidos de doces artesanais, desenvolvida em React com foco em experiência do usuário (UX), gestão de estado eficiente com Custom Hooks e integração com APIs externas.

---

## 🚀 Funcionalidades

- **Catálogo Dinâmico:** Visualização de produtos por categorias (Bolos, Pães, Doces) e busca em tempo real por nome.
- **Carrinho de Compras Persistente:** Adição/remoção de itens com salvamento automático no `localStorage` via Custom Hook.
- **Busca de Endereço Automática:** Preenchimento de logradouro, bairro, cidade e estado através da integração com a API do ViaCEP.
- **Checkout via WhatsApp:** Geração de mensagem formatada com os itens do pedido, total, observações e endereço de entrega, direcionando automaticamente para o WhatsApp (App ou Web).
- **Notificações em Tempo Real:** Sistema de avisos flutuantes (*Toasts*) ao interagir com o carrinho.
- **Confirmação de Ações:** Modal interativo para evitar limpezas ou finalizações de pedidos acidentais.

---

## 🛠️ Tecnologias Utilizadas

- **Core:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem:** JavaScript (ES6+)
- **Estilização:** CSS3 puro com variáveis CSS e Layout Responsivo (Flexbox e Grid)
- **API Externa:** [ViaCEP API](https://viacep.com.br/)
- **Deploy:** GitHub Pages

---

## 🏗️ Arquitetura e Decisões de Projeto

O projeto foi refatorado focando nas melhores práticas de Clean Code e Separação de Responsabilidades (*SOC*):

* **`useCart` (Custom Hook):** Centraliza a lógica do estado do carrinho, cálculos de totais, alteração de quantidades e a persistência no `localStorage` com tratamento de exceções (`try/catch`).
* **`useToast` (Custom Hook):** Gerencia a exibição temporária de notificações na tela.
* **`viaCep.js` (Service):** Camada de serviço isolada para requisições assíncronas de busca de CEP.
* **`gerarMensagemWhatsApp.js` (Utility):** Utilitário responsável pela formatação da mensagem e identificação do dispositivo do cliente (Mobile vs. Desktop).

---

## 📁 Estrutura de Pastas

```text
src/
 ├── assets/          # Imagens e recursos estáticos
 ├── components/      # Componentes reutilizáveis (Cart, ProductList, AddressForm, etc.)
 ├── data/            # Mock de dados do catálogo (produtos.js)
 ├── hooks/           # Custom Hooks (useCart.js, useToast.js)
 ├── services/        # Serviços de API externas (viaCep.js)
 ├── utils/           # Funções auxiliares (formatPrice.js, gerarMensagemWhatsApp.js)
 ├── App.jsx          # Componente principal / Orquestrador
 └── main.jsx         # Ponto de entrada da aplicação
```
---

 ## 💻 Como Rodar o Projeto Localmente


Pré-requisitos
•   Node.js instalado (versão 18 ou superior).

Passo a passo
1.   Clone o repositório:

Bash
git clone [https://github.com/SEU-USUARIO/Delicias-da-Lari-React.git](https://github.com/SEU-USUARIO/Delicias-da-Lari-React.git)

2. Acesse a pasta do projeto:

Bash
cd Delicias-da-Lari-React

3. Instale as dependências:

Bash
npm install

4. Inicie o servidor de desenvolvimento:

Bash
npm run dev

5. Abra o navegador no endereço exibido no terminal (geralmente http://localhost:5173).

---

## 📄Licença

Este projeto foi desenvolvido para fins de aprendizado e portfólio.


---

### 📌 Como adicionar ao seu projeto:

1. Abra ou crie o arquivo **`README.md`** na raiz do seu projeto no VS Code.
2. Cole o conteúdo acima.
3. Substitua o trecho `[https://github.com/SEU-USUARIO/Delicias-da-Lari-React.git](https://github.com/SEU-USUARIO/Delicias-da-Lari-React.git)` pelo link real do seu repositório.
4. Salve e faça o commit:

```bash
git add README.md
git commit -m "docs: add professional README.md"
git push origin master