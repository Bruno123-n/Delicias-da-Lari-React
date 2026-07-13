# Meu aprendizado em React

Este documento registra minha evolução no aprendizado de React e os principais conceitos aplicados no projeto Delícias da Lari.

---

# 1. Criação do projeto

Aprendi:

- Criar um projeto React utilizando Vite.
- Entender a estrutura inicial de pastas.
- Organizar componentes dentro da pasta components.
- Separar dados, componentes e estilos.

Estrutura utilizada:

src
├── components
├── data
├── assets
└── App.jsx

---

# 2. Componentes

Aprendi que React trabalha com componentes reutilizáveis.

Exemplos criados:

- ProductCard
- ProductList
- Modal
- SearchBar
- CategoryFilter
- Cart

Cada componente possui uma responsabilidade específica.

Exemplo:

ProductCard:
- Exibe informações de um produto.
- Recebe dados através de props.
- Executa ações através de funções recebidas do componente pai.

---

# 3. Props

Aprendi como passar informações entre componentes.

Exemplo:

O componente App envia:

- produtos
- funções
- estados

Para componentes filhos.

Também aprendi que componentes filhos não alteram diretamente o estado do pai. Eles recebem funções para solicitar alterações.

---

# 4. useState

Aprendi a criar e controlar estados.

Estados utilizados:

Categoria:

```javascript
const [categoria, setCategoria] = useState("Todos");


Busca:

const [busca, setBusca] = useState("");

Produto selecionado:

const [produtoSelecionado, setProdutoSelecionado] = useState(null);

Carrinho:

const [carrinho, setCarrinho] = useState([]);

Aprendi que quando o estado muda, o React renderiza novamente o componente.
```
---

# 5. Eventos

Aprendi a trabalhar com eventos:

onClick
mudanças em inputs
funções de interação

Exemplo:

Selecionar produto:

```javascript
onClick={() => onSelecionar(produto)}
6. Renderização de listas

Aprendi a utilizar o método map() para transformar dados em componentes.

Exemplo:

Lista de produtos:

produtos.map((produto) => (
  <ProductCard />
))

Também aprendi a importância da propriedade key.
```

---

# 7. Renderização condicional

Aprendi a mostrar elementos somente quando uma condição é verdadeira.

Exemplo:

Modal:

```javascript
{produtoSelecionado && (
  <Modal />
)}
```
O modal só aparece quando existe um produto selecionado.

---

# 8. Manipulação de arrays

Aprendi a utilizar:

```javascript
filter()

Para criar filtros.

Exemplo:

Pesquisa por nome.
Filtro por categoria.
Remover produtos do carrinho.
find()

Para encontrar um item específico.

Exemplo:

Verificar se um produto já existe no carrinho.

map()

Para modificar dados existentes.

Exemplo:

Alterar quantidade de produtos.

reduce()

Para calcular valores.

Exemplo:

Quantidade total de itens no carrinho.
```

---

# 9. useEffect

Aprendi que useEffect permite executar códigos em momentos específicos.

Utilizado para:

Sincronizar dados.
Trabalhar com localStorage.

Exemplo:

Salvar carrinho:

```javascript
useEffect(() => {
 localStorage.setItem(
  "carrinho",
  JSON.stringify(carrinho)
 );
}, [carrinho]);

Aprendi também sobre:

Array de dependências.
Execução após renderização.
Relação entre estado e efeitos.
10. LocalStorage

Aprendi que o navegador não salva objetos diretamente.

Por isso utilizamos:

JSON.stringify()

Transforma objeto em texto.

JSON.parse()

Transforma texto novamente em objeto.

Exemplo:

Salvar:

JSON.stringify(carrinho)

Carregar:

JSON.parse(carrinhoSalvo)
```

---

# 11. Carrinho de compras

Funcionalidades desenvolvidas:

Adicionar produtos.
Aumentar quantidade.
Diminuir quantidade.
Remover produtos.
Limpar carrinho.
Calcular quantidade total.

Conceitos usados:

Estado.
Props.
Arrays.
Funções.
Renderização.

---

# 12. Principais aprendizados

Com React aprendi que:

Componentes dividem responsabilidades.
Estados controlam informações que mudam.
Props permitem comunicação entre componentes.
Funções podem ser passadas como props.
React trabalha com fluxo de dados de pai para filho.
Alterações de estado causam novas renderizações.