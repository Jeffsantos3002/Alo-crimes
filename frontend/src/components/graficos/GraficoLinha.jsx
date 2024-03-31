import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

function GraficoLinha({ dados }) {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (dados) {
      const ctx = document.getElementById("grafico-linhas");
      if (chart) {
        chart.destroy();
      }
      setChart(new Chart(ctx, {
        type: 'line',
        data: {
          labels: dados.map(item => item["Mês"]),
          datasets: [{
            label: 'Ocorrências',
            data: dados.map(item => item["Ocorrências"]),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Número de Ocorrências de Crimes no Brasil',
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

  return (
    <div>
      <canvas id="grafico-linhas"></canvas>
    </div>
  );
}

export default GraficoLinha;
