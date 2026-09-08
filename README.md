# World In Brief — AI News Intelligence Platform v2

A professor-ready software engineering project based on the submitted World In Brief specification. It upgrades the original Agentic-ai-news repository into a demonstrable agentic system with a Planner → Executor workflow, live RSS ingestion, evidence-grounded responses, SQLite persistence, bookmarks/history, trending analytics, telemetry, Docker deployment, and optional local Ollama/Llama 3.2 inference.

## Architecture
Browser → Express REST API → Agent Planner → Executor/News Tool → SQLite + Ollama → auditable Agent Run.

The implementation intentionally keeps non-AI browsing functional if Ollama is unavailable.

## Requirements
- Node.js 20+
- Optional: Ollama + `llama3.2:3b`
- Docker Desktop (optional)

## Local run — easiest
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Open Terminal.
4. Run `npm install`.
5. Copy `.env.example` to `.env`.
6. Run `npm start`.
7. Open http://localhost:5000

### Enable the local LLM
Install Ollama, then:
`ollama pull llama3.2:3b`
Make sure Ollama is running. Restart the app. The header should say `Ollama connected`.

Without Ollama, the app uses a deterministic evidence-list fallback so the software demo still works.

## Demo script for professor
1. Open the dashboard and explain the layered architecture.
2. Click a category to show ingestion/search.
3. Ask: `Compare today's technology and business stories.`
4. Point out the displayed plan: retrieve_news → compare → synthesize.
5. Explain that the Planner creates actions and the Executor runs the news tool and LLM.
6. Show the Run ID and explain auditability.
7. If Ollama is running, repeat the question and show the model-generated synthesis.
8. Explain resilience: if Ollama goes down, news browsing remains available.
9. Open `/api/health` to show service health.
10. Show the SQLite database in `data/world-in-brief.db` and the SRS/UML/DFD PDFs in `docs/`.

## API highlights
- GET `/api/health`
- GET `/api/news`
- POST `/api/news/refresh`
- POST `/api/agent/chat`
- POST/DELETE `/api/bookmarks/:id`
- GET `/api/bookmarks`
- GET `/api/trending`
- GET `/api/analytics`
- GET `/api/agent/runs`
- POST `/api/feedback`

## Docker
`docker compose up --build`
Then open http://localhost:5000.

To pull the model in the Ollama container:
`docker compose exec ollama ollama pull llama3.2:3b`

## Hosting
### Recommended public demo
Host the Node application on Render/Railway/Fly.io or another Node-compatible host. Use a persistent volume for `data/` because SQLite is stateful. For a hosted AI demo, do not assume the hosting provider can run Ollama reliably; either deploy Ollama on a machine with sufficient RAM/GPU or keep the hosted version in fallback mode and use local Ollama for the live professor demonstration.

### Simple GitHub workflow
`git init`
`git add .`
`git commit -m "World In Brief v2"`
`git branch -M main`
`git remote add origin YOUR_GITHUB_REPO_URL`
`git push -u origin main`

## Academic alignment
The project implements the architecture described by the provided SRS: layered frontend/backend/AI Agent design, Planner/Executor/Memory/News Tool concepts, news ingestion, AI intelligence, personalization, bookmarks, analytics, feedback, and admin-oriented telemetry.
