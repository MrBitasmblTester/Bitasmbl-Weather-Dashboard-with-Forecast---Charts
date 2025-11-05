// src/components/WeatherChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
export default function WeatherChart() {
  const data = {labels:[], datasets:[]};
  return <Line data={data} />;
}