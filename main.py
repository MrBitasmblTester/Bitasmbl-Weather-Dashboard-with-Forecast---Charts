# main.py
from fastapi import FastAPI
from functools import lru_cache
app = FastAPI()

@app.get("/weather/cache/{city}")
@lru_cache(maxsize=32)
def get_cached_weather(city: str):
    # TODO: fetch from external API
    return {"city": city} 