# Professor Demonstration Guide

## 5-minute flow
**Minute 1 — Problem:** conventional aggregators show articles but do not reason over them.

**Minute 2 — Architecture:** Browser → Express API → Agent Planner → Executor → News Tool / Ollama → response + trace.

**Minute 3 — Live agent:** ask a comparison question. Show the plan and Run ID.

**Minute 4 — Software engineering:** show REST endpoints, SQLite persistence, authentication endpoints, error fallback, Dockerfile and test structure.

**Minute 5 — Documentation:** show SRS, Use Case, ER, Class, DFD, Sequence and Collaboration diagrams.

## Strong talking points
- Agentic behavior is explicit rather than pretending a normal chatbot is an agent.
- Planner separates decision-making from execution.
- Tool boundary isolates news retrieval.
- Local Ollama keeps inference self-hosted.
- SQLite makes the demonstration reproducible with no database server.
- Graceful degradation means the product remains usable when the LLM is unavailable.
- Agent runs store plan, status and latency for observability.
