import uvicorn
from fastapi import FastAPI
from app.routes import router

app = FastAPI(title=" Self-Healing Cloud Backend\)
app.include_router(router, prefix=\/api/v1\)

if __name__ == \__main__\:
 uvicorn.run(\app.main:app\, host=\0.0.0.0\, port=8000, reload=True)
