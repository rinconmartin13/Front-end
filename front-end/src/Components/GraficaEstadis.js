import '../App.css';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const GraficaEstadis = () =>{
  const data = {
    labels: [
      "1 semana",
      "2da semana",
      "3ra semana",
      "4ta semana",
      "5ta semana",
    ],
    datasets: [
      {
        label: "lts de agua",
        backgroundColor: "#FF8633",
        borderColor: "black",
        borderWidth: 0.5,
        hoverBackgroundColor: "#FFBA8A",
        hoverBorderColor: "#FFFF00",
        data: [2.16, 1.19, 2.43, 1.64, 0.72],
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  };
  return (
    <div className="App" style={{ width: "100%", height: "500px" }}>
      <h2>Statistics</h2>    
      <Bar data={data} options={opciones}></Bar>
    </div>
  );
}

export default GraficaEstadis;
