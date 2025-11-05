# Bitasmbl-Weather-Dashboard-with-Forecast-&-Charts

Description
Build a web application that displays current weather, multi-day forecasts, and visualizes trends with charts. The project focuses on integrating APIs, dynamic front-end updates, and data visualization for an interactive user experience.

## Tech Stack
- FastAPI
- ASP.NET Core
- React

## Requirements
- Fetch real-time weather data from a public API
- Display multi-day weather forecasts with clear UI elements
- Visualize temperature, humidity, or other metrics with charts
- Support user interactions, such as searching by city
- Optionally cache API responses to improve performance

## Installation

### Backend (FastAPI)
1. Navigate to the `api/fastapi` directory.
2. Create a virtual environment: `python3 -m venv venv`
3. Activate it:
   - On Linux/macOS: `source venv/bin/activate`
   - On Windows: `venv\\Scripts\\activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Set environment variables:
   - `WEATHER_API_KEY`: Your weather API key
   - `CACHE_ENABLED`: `true` or `false`
6. Start the server: `uvicorn main:app --reload --port 8000`

### Backend (ASP.NET Core)
1. Navigate to the `api/aspnet-core` directory.
2. Restore packages: `dotnet restore`
3. Set environment variables:
   - `Weather__ApiKey`: Your weather API key
   - `Cache__Enabled`: `true` or `false`
4. Run the project: `dotnet run`

### Front-End (React)
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Set environment variable:
   - `REACT_APP_API_URL`: e.g. `http://localhost:8000`
4. Start the development server: `npm start`

## Usage
1. Ensure both back-end servers (FastAPI on port 8000 and/or ASP.NET Core) are running.
2. In your browser, open `http://localhost:3000`.
3. Use the search bar to enter a city name.
4. View current weather conditions and multi-day forecasts.
5. Interact with the charts to explore temperature, humidity, and other metrics.
6. Cached responses (if enabled) will speed up repeat requests.

## Implementation Steps
1. Initialize FastAPI project structure and install dependencies.
2. Scaffold ASP.NET Core Web API project and configure settings.
3. Define REST endpoints for current weather and forecast.
4. Integrate with a public weather API (e.g., OpenWeatherMap).
5. Implement optional caching in both back ends.
6. Create a React app with routing and environment configuration.
7. Build components for search input, current weather display, and forecast cards.
8. Integrate a charting library (e.g., Chart.js or Recharts) for data visualization.
9. Connect React components to back-end endpoints via fetch/Axios.
10. Handle loading states, errors, and edge cases.
11. Test end-to-end functionality locally.
12. Document setup, environment variables, and usage in this README.

## API Endpoints
- GET /weather/current?city={cityName}
- GET /weather/forecast?city={cityName}&days={days}