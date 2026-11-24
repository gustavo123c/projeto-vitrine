<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&height=150&color=0:0d1117,100:3ECF8E&text=projeto-vitrine&fontColor=ffffff&fontSize=42&fontAlignY=42&desc=Gest%C3%A3o%20de%20tarefas%20%C2%B7%20RLS%20%C2%B7%20Testes%20%C2%B7%20Docker&descAlignY=70&descSize=15" width="100%" alt="projeto-vitrine" />

<p>
  <img src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js 20" />
  <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL 16" />
  <img src="https://img.shields.io/badge/Supabase-RLS-3ECF8E?style=flat-square&logo=supabase&logoColor=white" alt="Supabase RLS" />
  <img src="https://img.shields.io/badge/Vitest-testes-6E9F18?style=flat-square&logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/Gherkin-BDD-23D96C?style=flat-square&logo=cucumber&logoColor=white" alt="BDD Gherkin" />
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker Compose" />
  <img src="https://img.shields.io/badge/licen%C3%A7a-MIT-green?style=flat-square" alt="Licença MIT" />
</p>

**Base de uma aplicação de gestão de tarefas com dados isolados por usuário, testada e com ambiente reproduzível em um comando.**

</div>

---

## 🎯 Problema e solução

| | |
|---|---|
| **Problema** | Equipes perdem prazos por falta de visibilidade das tarefas, e dados de um usuário não podem vazar para outro. |
| **Solução** | Um núcleo de domínio pequeno e testado, com a segurança aplicada **no próprio banco** (Row Level Security) e um ambiente local que sobe com Docker Compose. |

## ✨ Destaques técnicos

- 🛡️ **Segurança no banco:** tabela `tasks` com **RLS** e políticas de `select`/`insert`/`update`/`delete` restritas a `user_id = auth.uid()`
- ✅ **Validação no domínio:** `addTask` rejeita títulos vazios ou com mais de 200 caracteres. O banco aplica a mesma regra com um `check`
- 🧪 **Testes unitários** com Vitest para criar, validar e concluir tarefas
- 📖 **Requisitos em BDD (Gherkin, pt-BR):** criar tarefa, concluir tarefa e isolamento de dados entre usuários
- 🐳 **Docker Compose:** Postgres 16 com healthcheck e migrations aplicadas automaticamente, mais o container da aplicação
- 🧩 **Funções puras e imutáveis** (`addTask`, `toggleTask`), fáceis de testar e reaproveitar no frontend

## 🏗️ Arquitetura

```
 src/tasks.js  ──── regras de domínio (funções puras)
      │
      ├── tests/tasks.test.js ........ testes unitários (Vitest)
      ├── features/tasks.feature ..... cenários BDD (Gherkin)
      ▼
 supabase/migrations/001_tasks.sql ─► Postgres / Supabase (RLS por usuário)
      ▲
 docker-compose.yml ── db (postgres:16) + app (node:20)
```

## 🚀 Como rodar

### Com Node.js

```bash
git clone https://github.com/gustavo123c/projeto-vitrine.git
cd projeto-vitrine/projeto-vitrine
npm install
npm test        # roda os testes com Vitest
npm run lint    # checagem de sintaxe de src/tasks.js
```

### Com Docker Compose

O serviço `app` lê variáveis de um arquivo `.env`. Crie um antes de subir os containers (pode ficar vazio):

```bash
cd projeto-vitrine/projeto-vitrine
touch .env                 # no PowerShell: New-Item .env
docker compose up --build
```

Isso sobe o **Postgres 16** na porta `5432` e aplica `supabase/migrations/` na inicialização. Depois o container `app` executa a suíte de testes. A senha do banco vem de `POSTGRES_PASSWORD` (padrão: `postgres`).

## 📂 Estrutura de pastas

```
projeto-vitrine/
├── src/tasks.js                    # domínio: addTask, toggleTask
├── tests/tasks.test.js             # testes unitários (Vitest)
├── features/tasks.feature          # cenários BDD em português
├── supabase/migrations/
│   └── 001_tasks.sql               # tabela tasks + políticas RLS
├── docs/DECISOES.md                # decisões técnicas
├── Dockerfile                      # imagem node:20-alpine
├── docker-compose.yml              # db (postgres:16) + app
├── package.json
└── LICENSE                         # MIT
```

## 🖼️ Preview

<!-- Adicione aqui prints ou um GIF (sugestão: docs/screenshots/). -->
| Testes passando | Banco com RLS | Interface |
|---|---|---|
| _print do `npm test`_ | _print das políticas no Supabase_ | _em breve_ |

## 🧠 Decisões técnicas

| Decisão | Motivo |
|---|---|
| **Supabase/Postgres** | Autenticação e banco prontos, com RLS para isolar dados por usuário |
| **Docker Compose** | Onboarding em um comando e paridade entre ambientes |
| **BDD (Gherkin)** | Requisitos legíveis por pessoas de negócio e verificáveis |
| **Vitest** | Testes rápidos e nativos para módulos ES |

Mais detalhes em [`docs/DECISOES.md`](projeto-vitrine/docs/DECISOES.md).

## 🗺️ Roadmap

- [ ] Interface React consumindo o Supabase (`npm run build` com Vite)
- [ ] Pipeline de CI no GitHub Actions (lint, testes e build em todo push/PR)
- [ ] Step definitions para executar os cenários BDD
- [ ] Deploy da demo online

## 📄 Licença e contato

Distribuído sob a licença [MIT](projeto-vitrine/LICENSE).

**Gustavo Cavalcanti de Melo Costa** · [@gustavo123c](https://github.com/gustavo123c) · gustavocavalcantimc@gmail.com
