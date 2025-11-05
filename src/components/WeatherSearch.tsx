// src/components/WeatherSearch.tsx
import React, { useState } from "react";
import axios from "axios";
export default function WeatherSearch() {
  const [city, setCity] = useState("");
  return (
    <input placeholder="City" value={city} onChange={e=>setCity(e.target.value)} onKeyDown={e=> e.key==="Enter" && axios.get(`/api/weather/current?city=${city}`)} />
  );
}