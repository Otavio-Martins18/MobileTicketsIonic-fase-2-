# MobileTicketsIonic-fase-2-

# MobileTicketsIonic — Sistema de Controle de Atendimento

Aplicativo mobile desenvolvido com **Ionic + Angular** para gerenciamento de filas de atendimento em laboratórios médicos. Projeto de disciplina — UNINASSAU 2025.

---

## Descrição

O sistema simula o fluxo completo de um serviço de atendimento com senha, contemplando três agentes:

- **AC – Agente Cliente:** acessa o totem para emitir sua senha e aguarda o chamado no painel.
- **AA – Agente Atendente:** aciona o sistema para chamar o próximo cliente e efetua o atendimento no guichê.
- **AS – Agente Sistema:** emite as senhas, controla as filas e responde aos comandos da atendente.

---

## Funcionalidades

- Emissão de senhas nos tipos **SP** (Prioritário), **SE** (Retirada de Exames) e **SG** (Geral)
- Numeração automática no formato `YYMMDD-PPSQ`
- Controle de expediente: atendimento disponível das **07:00 às 17:00**
- Descarte automático de 5% das senhas emitidas
- Fila com priorização: `[SP] → [SE|SG] → [SP] → [SE|SG]`
- Gerenciamento de **3 guichês** simultâneos com tempo de ocupação simulado
- Painel com as **5 últimas senhas chamadas**
- Relatórios **diário e mensal** com totais gerais, por tipo e TM médio

---

## Telas

| Tela | Descrição |
|---|---|
| **Totem** | Emissão de senhas pelo cliente |
| **Painel** | Exibição das últimas senhas chamadas |
| **Atendente** | Chamada do próximo da fila por guichê |
| **Relatórios** | Consulta de dados diários e mensais |

---

## Tecnologias

| Tecnologia | Versão |
|---|---|
| Angular | 20.x |
| Ionic Angular | 8.x |
| Capacitor | 8.x |
| RxJS | 7.8.x |
| TypeScript | 5.9.x |
| Node.js | 18+ recomendado |

---

## Pré-requisitos

- [Node.js](https://nodejs.org) — versão LTS recomendada
- Ionic CLI instalado globalmente:

```bash
npm install -g @ionic/cli
```

---

## Como executar

```bash
# 1. Acesse a pasta do projeto
cd MobileTicketsIonic

# 2. Instale as dependências (apenas na primeira vez)
npm install

# 3. Inicie o servidor de desenvolvimento
ionic serve
```

O app abrirá automaticamente em `http://localhost:8100/tabs/totem`.

> **Dica:** Para visualizar no formato mobile, pressione **F12** no navegador e ative o modo responsivo.

---

## Estrutura do Projeto

```
src/app/
├── models/
│   └── senha.model.ts         # Interface e tipos de senha
├── services/
│   └── fila.service.ts        # Lógica central das filas e regras de negócio
├── shared/
│   ├── pipes/
│   │   └── tipo-label.pipe.ts # Pipe para exibir o label do tipo de senha
│   └── shared.module.ts
├── pages/
│   ├── totem/                 # Tela de emissão de senha
│   ├── painel/                # Tela do painel de chamados
│   ├── atendente/             # Tela do operador de guichê
│   └── relatorios/            # Tela de relatórios
└── tabs/                      # Navegação por abas
```

---

## Regras de Negócio

### Tipos de Senha e TM

| Tipo | Descrição | Tempo Médio |
|---|---|---|
| SP | Prioritário | 15 min (± 5 min aleatório) |
| SE | Retirada de Exames | 1 min (95%) ou 5 min (5%) |
| SG | Geral | 5 min (± 3 min aleatório) |

### Ordem de Atendimento

```
[SP] → [SE | SG] → [SP] → [SE | SG] → ...
```

A cada chamada, o sistema alterna entre uma senha SP e uma senha SE ou SG (SE tem prioridade sobre SG dentro do grupo).

### Guichês

O sistema possui **3 guichês**. Qualquer guichê atende qualquer tipo de senha. Um guichê fica ocupado pelo tempo do TM calculado e libera automaticamente ao término.

<img width="1916" height="1029" alt="image" src="https://github.com/user-attachments/assets/d8ef93c7-6e1b-4ed2-922d-47ce076035ed" />
<img width="1915" height="1028" alt="image" src="https://github.com/user-attachments/assets/1f95a788-4ebf-43a2-bb0b-3bd2eb5312fe" />
<img width="1916" height="1032" alt="image" src="https://github.com/user-attachments/assets/e0af2502-d2a8-4828-830e-5852c28b4f42" />
<img width="1915" height="1035" alt="image" src="https://github.com/user-attachments/assets/36ec304c-f080-43ab-a2bd-ed4740bdfc00" />



