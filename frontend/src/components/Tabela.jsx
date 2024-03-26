import { useState} from "react";

import Detalhes from "./Detalhes";
import Paginacao from "./Paginacao";

function Tabela({ocorrencias, vitimas, municipios, colOcorrencias, colVitimas, colMunicipios}) {

  const [col, setCol] = useState(colOcorrencias);
  const [border, setBorder] = useState(1);
  const [dados, setDados] = useState(ocorrencias);

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

  // Recebe coluna e dados que serão modificados, além de definir página 1 como default
  const handleColuna = (col, dados) =>{
    setCol(col)
    setDados(dados)
    setCurrentPage(1)
  }
  // Paginação
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 15; // Número de itens por página
const totalPages = Math.ceil(dados.length / itemsPerPage);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
}

// Calcular o índice inicial e final dos dados a serem exibidos na página atual
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = Math.min(startIndex + itemsPerPage, dados.length);

const dadosPaginados = dados.slice(startIndex, endIndex);

  const verificar = (linha)=>{
    // console.log(linha)
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
        <label className="label px-2 rounded-2xl shadow-md flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#1351B4" className="w-6 h-6 opacity-70">
            <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
          </svg>
          <input type="text" className="grow outline-none" />
        </label>
      </div>
      <div className="overflow-x-auto overflow-hidden">
        <table className="table">
        {/* Verifica se a tabela tá vazia */}
         { col ?
          <>         
         <thead>
            <tr>
              {col.map((coluna, index) => (
                <th className="font-medium text-base text-black" key={index}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dadosPaginados.map((linha, index) => (
              <tr className="hover" key={index}>
                {col.map((coluna, columnIndex) => (
                  <td className="text-sm text-black" key={columnIndex}>{linha[coluna]}</td>
                ))}
                <td><Detalhes tabela={linha} onClick={verificar(linha)} /></td>
              </tr>
            ))}
          </tbody> 
          </> 
          : <p className="text-center text-2xl">Nenhum dado encontrado...</p>}
        </table>
        <Paginacao totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>

      </div>
    </div>
  );
}

export default Tabela;
