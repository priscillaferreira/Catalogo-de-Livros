# Frontend de Livros — React + Vite

## Objetivo
Interface React que, ao clicar no botão **Buscar Livros**, consulta a rota `GET /livros` da API Flask (Lista 1) e exibe os três livros retornados.

## Pré-requisitos
- Node.js 18+
- API Flask da Lista 1 em execução em `http://127.0.0.1:5000`

## Instalação
```bash
npm install
```

## Execução
```bash
npm run dev
```
Acesse o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Integração com o Flask
O `vite.config.js` usa um proxy: o React chama `/api/livros` e o Vite encaminha para `http://127.0.0.1:5000/livros`, evitando bloqueio de CORS.

## Funcionalidades
- Título "Catálogo de Livros" e botão "Buscar Livros"
- Requisição feita somente após o clique (`onClick` + `fetch()`)
- Conversão com `response.json()` e armazenamento no estado (`useState`)
- Renderização com `map()` usando `key={livro.id}`
- Mensagem de carregamento e de erro (API indisponível)
