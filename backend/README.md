# Self‑Healing Cloud Backend

This repository contains a production‑ready FastAPI backend for the **Self‑Healing Intelligent Cloud System**.

## Features
- Asynchronous FastAPI REST APIs
- JWT authentication with role‑based access
- MongoDB persistence (via Motor)
- Scikit‑Learn anomaly‑detection pipelines (Isolation Forest, Random Forest, One‑Class SVM)
- Automatic model selection & Joblib persistence
- Alerting, recovery simulation, and reporting (PDF/CSV/Excel)
- Docker & Docker‑Compose for local and production deployment
- Comprehensive pytest suite

## Getting Started
```bash
# Clone repo and cd into backend
cd backend

# Install dependencies (or use Docker)
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt

# Prepare environment variables (see .env.example)
cp .env.example .env

# Run preprocessing & training (once)
python -m app.machine_learning.training_pipeline

# Start the server
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Visit `http://localhost:8000/docs` for the auto‑generated Swagger UI.
