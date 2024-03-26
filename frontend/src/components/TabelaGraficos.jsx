import React, { useState } from "react";

import GraficoPizza from '../components/graficos/GraficoPizza';
import GraficoLinha from '../components/graficos/GraficoLinha';
import GraficoBarras from '../components/graficos/GraficoBarras'; // Importe o componente GraficoBarras

function TabelaGraficos({ ocorrencias, vitimas, municipios, colOcorrencias, colVitimas, colMunicipios }) {

  const [col, setCol] = useState(colOcorrencias);
  const [border, setBorder] = useState(1);
  const [dados, setDados] = useState(ocorrencias);
  const filters = [null, null, null, null, null];

  //Os dados serão exibidos de acordo com a coluna selecionada
  const handleTable = (table) => {
    setBorder(table);
    switch (table) {
      case 1:
        handleColuna(colOcorrencias, ocorrencias)
        break;
      case 2:
        handleColuna(colVitimas, vitimas)
        break;
      default:
        handleColuna(colMunicipios, municipios)
    }
  };

  // Recebe coluna e dados que serão modificados
  const handleColuna = (col, dados) => {
    setCol(col)
    setDados(dados)
  }

  return (
    <div className="w-full bg-white rounded-xl px-2.5 py-4">
      <div className="flex flex-row justify-between mb-12">
        <div className="flex flex-row space-x-8">
          <div className="flex flex-col items-center">
            <button onClick={() => handleTable(1)} className="text-2xl">Ocorrências</button>
            <div className={border === 1 ? 'h-2 w-10 border-b border-blue' : 'h-2'}></div>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => handleTable(2)} className="text-2xl">Vítimas</button>
            <div className={border === 2 ? 'h-2 w-10 border-b border-blue' : 'h-2'}></div>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => handleTable(3)} className="text-2xl">Municípios</button>
            <div className={border === 3 ? 'h-2 w-10 border-b border-blue' : 'h-2'}></div>
          </div>
        </div>
        {/* <label className="label px-2 rounded-2xl shadow-md flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1351B4" className="w-6 h-6 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
          <input type="text" className="grow outline-none" />
        </label> */}
      </div>
      <div className="flex flex-row">
        <div style={{ width: "50%" }}>
          <GraficoPizza
            filtro1={filters[0]}
            filtro2={filters[1]}
            filtro3={filters[2]}
            filtro4={filters[3]}
            filtro5={filters[4]}
          />
        </div>
        <div style={{ width: "100%" }}>
          <GraficoLinha dados={ocorrencias} />
        </div>
      </div>
      <div>
        <GraficoBarras dados={vitimas} /> {/* Adicione o gráfico de barras aqui */}
      </div>
    </div>
  );
}

export default TabelaGraficos;
