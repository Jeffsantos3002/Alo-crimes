import { useState, useEffect } from "react";
import Detalhes from "./Detalhes";
import ocorrencias from "../../data/ocorrencias";
import vitimas from "../../data/vitimas";
import municipios from "../../data/municipios";

function TabelaComFiltro() {
  const colOcorrencias = ['UF', 'Tipo Crime', 'Ano', 'Mês', 'Ocorrências'];
  const colVitimas = ['UF', 'Tipo Crime', 'Ano', 'Mês', 'Sexo', 'Vítimas'];
  const colMunicipios = ['Município', 'Sigla UF', 'Região', 'Mês/Ano', 'Vítimas'];

  const [col, setCol] = useState(colOcorrencias);
  const [border, setBorder] = useState(1);
  const [dados, setDados] = useState(ocorrencias);
  const [ordem, setOrdem] = useState({atributo: 'UF', direcao: 'asc'}); // Estado para armazenar o atributo e a direção da ordenação

  const monthToNumber = {
    'Janeiro': 1,
    'Fevereiro': 2,
    'Março': 3,
    'Abril': 4,
    'Maio': 5,
    'Junho': 6,
    'Julho': 7,
    'Agosto': 8,
    'Setembro': 9,
    'Outubro': 10,
    'Novembro': 11,
    'Dezembro': 12
  };

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

  const handleOrderChange = (atributo, event) => {
    setOrdem({atributo: atributo, direcao: event.target.value}); // Atualiza o estado da ordenação com o novo atributo e direção
  };

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
      </div>
      <div className="flex flex-row justify-between">
        {border === 1 && ['UF', 'Tipo Crime'].map((atributo, index) => (
          <select key={index} onChange={(event) => handleOrderChange(atributo, event)}>
            <option value="asc">{atributo}: Ordem alfabética crescente</option>
            <option value="desc">{atributo}: Ordem alfabética decrescente</option>
          </select>
        ))}
        {border === 1 && (
          <select onChange={(event) => handleOrderChange('Mês', event)}>
            <option value="asc">Mês: Ordem crescente</option>
            <option value="desc">Mês: Ordem decrescente</option>
          </select>
        )}
        {border === 1 && (
          <select onChange={(event) => handleOrderChange('Ano', event)}>
            <option value="asc">Ano: Menor para maior</option>
            <option value="desc">Ano: Maior para menor</option>
          </select>
        )}
        {border === 1 && (
          <select onChange={(event) => handleOrderChange('Ocorrências', event)}>
            <option value="asc">Ocorrências: Menor para maior</option>
            <option value="desc">Ocorrências: Maior para menor</option>
          </select>
        )}
        {border === 2 && ['UF', 'Tipo Crime', 'Ano', 'Mês', 'Sexo', 'Vítimas'].map((atributo, index) => (
          <select key={index} onChange={(event) => handleOrderChange(atributo, event)}>
            {atributo === 'Sexo' ? (
              <>
                <option value="masculino">Sexo: Masculino</option>
                <option value="feminino">Sexo: Feminino</option>
                <option value="ni">Sexo NI</option>
              </>
            ) : (
              <>
                <option value="asc">{atributo}: Ordem crescente</option>
                <option value="desc">{atributo}: Ordem decrescente</option>
              </>
            )}
          </select>
        ))}
        {border === 3 && ['Município', 'Sigla UF', 'Região', 'Mês/Ano', 'Vítimas'].map((atributo, index) => (
          <select key={index} onChange={(event) => handleOrderChange(atributo, event)}>
            <option value="asc">{atributo}: Ordem crescente</option>
            <option value="desc">{atributo}: Ordem decrescente</option>
          </select>
        ))}
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
            {dados.sort((a, b) => {
              // Verifica se o atributo é um mês e ordena numericamente
              if (ordem.atributo === 'Mês') {
                return ordem.direcao === "asc" ? monthToNumber[a[ordem.atributo]] - monthToNumber[b[ordem.atributo]] : monthToNumber[b[ordem.atributo]] - monthToNumber[a[ordem.atributo]];
              } else if (typeof a[ordem.atributo] === 'string') {
                return ordem.direcao === "asc" ? a[ordem.atributo].localeCompare(b[ordem.atributo]) : b[ordem.atributo].localeCompare(a[ordem.atributo]);
              } else {
                return ordem.direcao === "asc" ? a[ordem.atributo] - b[ordem.atributo] : b[ordem.atributo] - a[ordem.atributo];
              }
            }).map((linha, index) => (
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

export default TabelaComFiltro;
