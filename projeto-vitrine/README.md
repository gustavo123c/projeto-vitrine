# projeto-vitrine

[![CI](https://github.com/SEU_USUARIO/projeto-vitrine/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/projeto-vitrine/actions)
![License](https://img.shields.io/badge/license-MIT-green)

> Aplicação de gestão de tarefas com login, dados isolados por usuário e entrega automatizada.
> **[🔗 Demo online](https://SEU-DEMO.vercel.app)**

## Problema e solução
**Problema:** equipes perdem prazos por falta de visibilidade das tarefas.
**Solução:** painel simples, seguro (RLS no banco) e testado, com deploy automatizado.

## Resultados
- ⏱️ Ambiente completo em **1 comando** (`docker compose up`)
- 🛡️ Segurança aplicada no banco (Row Level Security)
- ✅ Testes automáticos em todo push (CI)

## Arquitetura
```
React (src/) ──► Supabase/Postgres (supabase/migrations)
      ▲                    ▲
 Testes (tests/)     Cenários BDD (features/)
      └────── GitHub Actions (CI/CD) ──────┘
```

## Como rodar
```bash
git clone https://github.com/SEU_USUARIO/projeto-vitrine.git && cd projeto-vitrine
cp .env.example .env
docker compose up --build
```
App em http://localhost:3000

## Testes
```bash
npm ci && npm test
```

## Decisões técnicas
Veja [docs/DECISOES.md](docs/DECISOES.md).

## Contato
Gustavo Cavalcanti de Melo Costa · gustavocavalcantimc@gmail.com · 
