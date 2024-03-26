import { useState, useEffect } from "react";
import Detalhes from "./Detalhes"; // Importando o componente Detalhes
import ocorrencias from "../../data/ocorrencias"; // Importando dados de ocorrencias
import vitimas from "../../data/vitimas"; // Importando dados de vitimas
import municipios from "../../data/municipios"; // Importando dados de municipios

function TabelaComFiltro() {
  // Definindo os cabeçalhos das colunas para cada tipo de tabela
  const colOcorrencias = ['UF', 'Tipo Crime', 'Ano', 'Mês', 'Ocorrências'];
  const colVitimas = ['UF', 'Tipo Crime', 'Ano', 'Mês', 'Sexo', 'Vítimas'];
  const colMunicipios = ['Município', 'Sigla UF', 'Região', 'Mês/Ano', 'Vítimas'];

  // Estados
  const [col, setCol] = useState(colOcorrencias); // Estado para armazenar as colunas atuais
  const [border, setBorder] = useState(1); // Estado para armazenar o estilo da borda
  const [dados, setDados] = useState(ocorrencias); // Estado para armazenar os dados atuais
  const [ordem, setOrdem] = useState({atributo: 'UF', direcao: 'asc'}); // Estado para armazenar o atributo e a direção da ordenação

  // Função para alterar a tabela de acordo com o botão selecionado
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

  // Efeito para exibir o estado border no console sempre que col for alterado
  useEffect(() => {
    console.log(border);
  }, [col]);

  // Função para verificar os detalhes
  const verificar = (linha)=>{
    console.log(linha)
  };

  // Função para lidar com a mudança de ordenação
  const handleOrderChange = (atributo, event) => {
    setOrdem({atributo: atributo, direcao: event.target.value}); // Atualiza o estado da ordenação com o novo atributo e direção
  };

  // Renderização do componente
  return (
    <div className="w-full bg-white rounded-xl px-2.5 py-4">
      {/* Botões para alternar entre tabelas */}
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
      {/* Seletores de ordenação */}
      <div className="flex flex-row justify-between">
        {['UF', 'Tipo Crime', 'Mês'].map((atributo, index) => (
          <select key={index} onChange={(event) => handleOrderChange(atributo, event)}>
            <option value="asc">{atributo}: Ordem alfabética cres</option>
            <option value="desc">{atributo}: Ordem alfabética descres</option>
          </select>
        ))}
        <select onChange={(event) => handleOrderChange('Ano', event)}>
          <option value="asc">Ano: Menor para maior</option>
          <option value="desc">Ano: Maior para menor</option>
        </select>
        <select onChange={(event) => handleOrderChange('Ocorrências', event)}>
          <option value="asc">Ocorrências: Menor para maior</option>
          <option value="desc">Ocorrências: Maior para menor</option>
        </select>
      </div>
      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              {/* Cabeçalhos das colunas */}
              {col.map((coluna, index) => (
                <th className="font-medium text-base text-black" key={index}>{coluna}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Ordenação e mapeamento dos dados */}
            {dados.sort((a, b) => {
              if (typeof a[ordem.atributo] === 'string') {
                return ordem.direcao === "asc" ? a[ordem.atributo].localeCompare(b[ordem.atributo]) : b[ordem.atributo].localeCompare(a[ordem.atributo]);
              } else {
                return ordem.direcao === "asc" ? a[ordem.atributo] - b[ordem.atributo] : b[ordem.atributo] - a[ordem.atributo];
              }
            }).map((linha, index) => (
              <tr className="hover" key={index}>
                {/* Renderização das células */}
                {col.map((coluna, columnIndex) => (
                  <td className="text-sm text-black" key={columnIndex}>{linha[coluna]}</td>
                ))}
                {/* Componente Detalhes */}
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
