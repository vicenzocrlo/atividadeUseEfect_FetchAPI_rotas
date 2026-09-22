# Atividade React — useEffect, Consumo de API e Rotas

## O que está implementado

- **Rotas** (`react-router-dom`): Home, Usuários, Alunos e Sobre, navegáveis pelo menu sem recarregar a página.
- **`/usuarios`** — atividade proposta no material de `useEffect`:
  - busca usuários na API pública `jsonplaceholder.typicode.com/users` com `fetch` dentro de um `useEffect`;
  - exibe **nome, email e telefone** de cada usuário;
  - botão **"Recarregar usuários"** que refaz a chamada à API;
  - mensagem **"Nenhum usuário encontrado"** quando a busca não encontra ninguém;
  - trata os estados de carregamento (`loading`) e erro (`erro`).
- **`/alunos`** — prática de `useState` do segundo material: adicionar nomes a uma lista e mostrar mensagem quando ela está vazia.

