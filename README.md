# Self‑Healing Intelligent Cloud Platform

## Overview

This repository implements a **Self‑Healing Intelligent Cloud System** that detects anomalies in cloud infrastructure telemetry, automatically generates alerts, and simulates self‑healing actions. The solution consists of two main parts:

1. **Backend** – FastAPI service (`backend/`) built with Python 3.12, MongoDB, and Scikit‑Learn. It handles data ingestion, preprocessing, model training, prediction, authentication, alerting, recovery simulation, reporting, and exposes a rich set of secure REST APIs.
2. **Frontend** – Vite‑based React (or any framework you choose) living in `frontend/`. It consumes the backend APIs to render dashboards, visualizations, and management screens.

Both components are container‑ready and can be deployed together using Docker‑Compose.

---

## Repository Structure

```
self-Healing-cloud-platform/
│
├─ backend/                     # FastAPI backend (see backend/README.md)
│   ├─ app/                     # Layered architecture (controllers, services, …)
│   ├─ dataset/                 # system_metrics.csv
│   ├─ trained_models/          # Joblib‑saved best model
│   ├─ logs/                    # Application log files
│   ├─ tests/                   # Pytest suite
│   ├─ Dockerfile
│   ├─ docker-compose.yml
│   └─ requirements.txt
│
├─ frontend/                    # Vite/React frontend (placeholder for now)
│   ├─ src/
│   ├─ public/
│   ├─ vite.config.ts
│   └─ package.json
│
├─ system_metrics.csv           # Original telemetry dataset (copied to backend/dataset/)
├─ .gitignore
├─ README.md                    # **You are reading it!**
└─ implementation_plan.md       # Detailed technical plan for the backend
```

---

## Getting Started

### Prerequisites
- **Python 3.12** (for the backend)
- **Node.js 20+** (for the frontend, if you wish to run it locally)
- **Docker** (optional, for containerised deployment)
- **MongoDB** (local instance or Docker service)

### Backend Setup (local Python environment)
1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```
2. **Create a virtual environment and activate it**
   ```bash
   python -m venv venv
   .\\venv\\Scripts\\activate   # PowerShell / CMD on Windows
   # source venv/bin/activate  # Linux/macOS
   ```
3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
4. **Create a `.env` file** (copy from `.env.example` if provided) with at least the following variables:
   ```text
   MONGODB_URI=mongodb://localhost:27017/self_healing
   JWT_SECRET=YOUR_RANDOM_SECRET
   JWT_ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=60
   MODEL_DIR=../trained_models
   DATASET_PATH=../dataset/system_metrics.csv
   LOG_LEVEL=INFO
   ```
5. **Run the preprocessing & training pipeline** (once)
   ```bash
   python -m app.machine_learning.training_pipeline
   ```
   This will generate `trained_models/best_model.joblib`.
6. **Start the FastAPI server**
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
   ```
7. **Explore the API docs** at `http://localhost:8000/docs`.

### Backend Setup (Docker‑Compose)
1. From the repository root, run:
   ```bash
   cd backend
   docker compose up --build
   ```
2. The backend will be reachable at `http://localhost:8000`.
3. Inside the running container, train the model once:
   ```bash
   docker exec -it self_healing_cloud_app python -m app.machine_learning.training_pipeline
   ```
   (Replace `self_healing_cloud_app` with the container name shown by `docker compose ps`).

### Frontend (optional)
If you wish to run the frontend:
```bash
cd frontend
npm install
npm run dev   # Vite dev server, usually on http://localhost:5173
```
The frontend is expected to call the backend APIs under `/api/v1/...`.

---

## Core Features
- **Anomaly Detection** using Isolation Forest, Random Forest, and One‑Class SVM.
- **Automatic Model Selection** (best F1 score) and persistence with Joblib.
- **JWT‑based Authentication** with role‑based access (Admin, Cloud Engineer, Viewer).
- **Alert Engine** – severity‑based alerts stored in MongoDB.
- **Self‑Healing Simulation** – restart services, scale resources, failover actions (logged).
- **Reporting** – daily/weekly/monthly PDF, CSV, Excel reports with charts.
- **Dockerized Deployment** – single `docker-compose.yml` brings up both backend and MongoDB.
- **Extensive Test Suite** – Pytest coverage for authentication, ML pipeline, and all public endpoints.
- **OpenAPI/Swagger UI** – auto‑generated documentation.

---

## License

This project is released under the **MIT License**. Feel free to modify, extend, and redistribute.

---

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/awesome‑feature`).
3. Write tests for your changes.
4. Ensure `pytest` passes and linting succeeds.
5. Submit a Pull Request.

---

## Contact

For questions or collaborations, open an issue or contact the maintainer at **your.email@example.com**.