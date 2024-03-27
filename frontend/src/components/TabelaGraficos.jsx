import React, { useState } from "react";
import { GraficoFactory, TipoGrafico } from './GraficoFactory';

function TabelaGraficos({ ocorrencias, vitimas, municipios, colOcorrencias, colVitimas, colMunicipios }) {
  const [col, setCol] = useState(colOcorrencias);
  const [border, setBorder] = useState(1);
  const [dados, setDados] = useState(ocorrencias);
  const filters = [null, null, null, null, null];

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
      </div>
      <div className="flex flex-row">
        <div style={{ width: "50%" }}>
          {GraficoFactory.criarGrafico(TipoGrafico.PIZZA, dados)}
        </div>
        <div style={{ width: "100%" }}>
          {GraficoFactory.criarGrafico(TipoGrafico.LINHA, dados)}
        </div>
      </div>
      <div>
        {GraficoFactory.criarGrafico(TipoGrafico.BARRAS, vitimas)}
      </div>
    </div>
  );
}

export default TabelaGraficos;
