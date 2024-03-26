import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import ocorrencias from "../../data/ocorrencias";
import vitimas from "../../data/vitimas";
import municipios from "../../data/municipios";

function GraficoPizza({ filtro1, filtro2, filtro3, filtro4, filtro5 }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let filteredData = ocorrencias;

    if (filtro1) {
      filteredData = filteredData.filter((item) => item["UF"] === filtro1);
    }
    if (filtro2) {
      filteredData = filteredData.filter((item) => item["Tipo Crime"] === filtro2);
    }
    if (filtro3) {
      filteredData = filteredData.filter((item) => item["Ano"] === filtro3);
    }
    if (filtro4) {
      filteredData = filteredData.filter((item) => item["Mês"] === filtro4);
    }
    if (filtro5) {
      filteredData = filteredData.filter((item) => item["Ocorrências"] === filtro5);
    }

    const countData = {};
    filteredData.forEach((item) => {
      const key = item["Tipo Crime"];
      countData[key] = (countData[key] || 0) + 1;
    });

    const labels = Object.keys(countData);
    const values = Object.values(countData);

    setData({
      labels,
      datasets: [
        {
          label: "Ocorrências",
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [filtro1, filtro2, filtro3, filtro4, filtro5]);

  if (!data) {
    return null; // or a loading indicator
  }

  return (
    <div>
      <h2>Gráfico de Pizza</h2>
      <Doughnut data={data} />
    </div>
  );
}

export default GraficoPizza;
