import { useState, useEffect } from "react";
import Detalhes from "./Detalhes";
import ocorrencias from "../../data/ocorrencias";
import vitimas from "../../data/vitimas";
import municipios from "../../data/municipios";

function Tabela() {
  const colOcorrencias = ['UF', 'Tipo Crime', 'Ano', 'Mês', 'Ocorrências'];
  const colVitimas = ['UF', 'Tipo Crime', 'Ano', 'Mês', 'Sexo', 'Vítimas'];
  const colMunicipios = ['Município', 'Sigla UF', 'Região', 'Mês/Ano', 'Vítimas'];

  const [col, setCol] = useState(colOcorrencias);
  const [border, setBorder] = useState(1);
  const [dados, setDados] = useState(ocorrencias);

  const handleTable = (table) => {
    setBorder(table);
    switch (table) {
      case 1:
        setCol(colOcorrencias);
        setDados(ocorrencias);
        break;
      case 2:
        setCol(colVitimas);
        setDados(vitimas);
        break;
      case 3:
        setCol(colMunicipios);
        setDados(municipios);
        break;
      default:
        setCol(colOcorrencias);
        setDados(ocorrencias);
    }
  };

  useEffect(() => {
    console.log(border);
  }, [col]);

  const verificar = (linha)=>{
    console.log(linha)
  }

  return (
    <div className="w-full bg-white rounded-xl px-2.5 py-4">
      <div className="flex flex-row justify-between">
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
        <label className="label px-2 rounded-2xl shadow-md flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1351B4" className="w-6 h-6 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
          <input type="text" className="grow outline-none" />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {col.map((coluna, index) => (
                <th className="font-medium text-base text-black" key={index}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dados.map((linha, index) => (
              <tr className="hover" key={index}>
                {col.map((coluna, columnIndex) => (
                  <td className="text-sm text-black" key={columnIndex}>{linha[coluna]}</td>
                ))}
                <td><Detalhes tabela={linha} onClick={verificar(linha)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tabela;
