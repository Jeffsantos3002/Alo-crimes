import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

function GraficoBarras({ dados }) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (dados) {
      const groupedData = groupData(dados); // Agrupa os dados por tipo de crime e sexo
      const ctx = document.getElementById("grafico-barras");
      if (chart) {
        chart.destroy();
      }
      setChart(new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(groupedData),
          datasets: [{
            label: 'Feminino',
            data: Object.values(groupedData).map(item => item["Feminino"]),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }, {
            label: 'Masculino',
            data: Object.values(groupedData).map(item => item["Masculino"]),
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }, {
            label: 'Sexo NI',
            data: Object.values(groupedData).map(item => item["Sexo NI"]),
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Comparação - Sexo da Vítima X Tipo de Crime',
              font: {
                size: 16
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }));
    }
  }, [dados]);

  // Função para agrupar os dados por tipo de crime e sexo
  const groupData = (data) => {
    const grouped = {};
    data.forEach(item => {
      const key = `${item["Tipo Crime"]}`;
      if (!grouped[key]) {
        grouped[key] = { "Feminino": 0, "Masculino": 0, "Sexo NI": 0 };
      }
      grouped[key][item["Sexo"]] += item["Vítimas"];
    });
    return grouped;
  };

  return (
    <div>
      <canvas id="grafico-barras"></canvas>
    </div>
  );
}

export default GraficoBarras;
