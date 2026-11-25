from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Elf-ant API",
    description="API de la plateforme éducative Elf-ant",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE"],
    allow_headers=["Content-Type", "Authorization"],
)


@app.get("/", tags=["Accueil"])
def root():
    return {
        "application": "Elf-ant",
        "message": "Bienvenue sur l'API Elf-ant",
        "version": "0.1.0",
    }


@app.get("/api/v1/health", tags=["Système"])
def health_check():
    return {
        "status": "healthy",
        "application": "Elf-ant",
        "database": "not_connected",
    }
