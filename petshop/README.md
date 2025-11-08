

## Como Executar o Projeto

Para executar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) e o [Yarn](https://yarnpkg.com/) (ou npm) instalados.

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/petshop.git
cd petshop
```

### 2. Instale as Dependências

Na pasta raiz do projeto, execute o comando para instalar todas as dependências:

```bash
yarn install
# ou se preferir usar o npm
npm install
```

### 3. Execute a API Local (Banco de Dados)

Este projeto utiliza o `json-server` para simular uma API REST a partir do arquivo `db.json`.

Em um terminal, execute o seguinte comando para iniciar o servidor da API. Recomenda-se usar a porta 5000 para evitar conflitos.

```bash
npx json-server --watch db.json --port 5000
```

Mantenha este terminal em execução para que a aplicação possa consumir os dados.

### 4. Execute a Aplicação React

Em **outro terminal**, na mesma pasta do projeto, inicie a aplicação React:

```bash
yarn start
# ou
npm start
```

A aplicação será aberta automaticamente no seu navegador, geralmente em `http://localhost:3000`.

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte maneira para facilitar a manutenção e escalabilidade:

```
petshop/
├── public/              # Arquivos estáticos e HTML base
├── src/
│   ├── assets/          # CSS global, fontes e imagens
│   ├── components/      # Componentes reutilizáveis (Ex: Cabecalho, ListaPost)
│   ├── paginas/         # Componentes que representam uma página/rota completa
│   ├── App.jsx          # Componente principal que define as rotas
│   └── index.js         # Ponto de entrada da aplicação React
│
├── .env                 # Armazena variáveis de ambiente (não versionado)
├── db.json              # Banco de dados simulado para o json-server
├── package.json         # Dependências e scripts do projeto
└── README.md            # Este arquivo
```

-   **`src/assets`**: Contém todos os arquivos estáticos que são importados pelos componentes, como folhas de estilo CSS e imagens.
-   **`src/components`**: Armazena componentes React que são reutilizados em várias partes da aplicação, como o cabeçalho (`Cabecalho.jsx`).
-   **`src/paginas`**: Cada arquivo aqui representa uma página completa da aplicação, que é associada a uma rota no `App.jsx`. Por exemplo, `Home.jsx` e `Sobre.jsx`.

## React Router: Navegação em uma SPA (Single Page Application)

Este projeto utiliza o **React Router** para gerenciar a navegação. Em uma SPA como esta, a aplicação carrega uma única página HTML e o conteúdo é atualizado dinamicamente, sem a necessidade de recarregar a página inteira a cada nova interação do usuário.

### Por que usar o React Router?

O React Router é essencial para criar uma experiência de usuário fluida e moderna. Ele permite:
1.  **Sincronizar a UI com a URL:** Mantém a interface do usuário correspondendo ao endereço na barra do navegador.
2.  **Navegação sem Recarregamento:** Transições de página instantâneas, pois apenas os componentes necessários são renderizados novamente.
3.  **URLs Compartilháveis:** Cada "página" da aplicação tem uma URL única que pode ser favoritada ou compartilhada.

### Exemplos de Uso no Projeto

A configuração das rotas se encontra principalmente no arquivo `src/App.jsx`.

#### 1. Configuração Principal (`BrowserRouter` e `Routes`)

O `BrowserRouter` é o componente que envolve toda a aplicação, habilitando o roteamento. Dentro dele, o `Routes` gerencia qual `Route` (rota) deve ser renderizada com base na URL atual.

```jsx
// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </Router>
  );
}
```

#### Rotas Dinâmicas e Aninhadas

Para páginas que dependem de um identificador, como um post de blog ou um produto específico, usamos rotas dinâmicas com parâmetros. O hook `useParams` nos dá acesso a esses parâmetros dentro do componente.

**Definição da Rota:**
```jsx
// src/App.jsx
<Route path="/posts/:id" element={<Post />} />
<Route path="/produto/:id" element={<Produto />} />
```

**Uso no Componente:**
```jsx
// src/paginas/Post.jsx
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams(); // Acessa o 'id' da URL
  // ... busca e exibe os dados do post com o id correspondente
  return <h1>Exibindo o post: {id}</h1>;
}
```

Essa abordagem torna a aplicação mais organizada, escalável e proporciona uma navegação intuitiva, fundamental para a qualidade de qualquer SPA.
