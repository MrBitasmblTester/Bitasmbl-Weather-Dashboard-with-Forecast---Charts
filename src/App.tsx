// src/App.tsx
import React from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherChart from "./components/WeatherChart";

export default function App() {
  return (
    <div>
      <WeatherSearch />
      <WeatherChart />
    </div>
  );
}