import { useState, useEffect } from "react";
import Detalhes from "./Detalhes";
import Tabela from "./Tabela"; // Importa o componente Tabela
import ocorrencias from "../../data/ocorrencias";
import vitimas from "../../data/vitimas";
import municipios from "../../data/municipios";

function TabelaComFiltros() {
  const [dados, setDados] = useState(ocorrencias); // Define dados padrão como ocorrencias
  const [filtro, setFiltro] = useState(null); // Estado para armazenar o filtro selecionado

  // Função para filtrar os dados com base no filtro selecionado
  const filtrarDados = (filtro) => {
    switch (filtro) {
      case "ocorrencias":
        setDados(ocorrencias);
        break;
      case "vitimas":
        setDados(vitimas);
        break;
      case "municipios":
        setDados(municipios);
        break;
      default:
        setDados(ocorrencias);
    }
  };

  return (
    <div>
      {/* Botões de filtragem */}
      <div className="flex justify-center space-x-4 my-4">
        <button onClick={() => filtrarDados("ocorrencias")} className="py-2 px-4 bg-blue text-white rounded-lg">Ocorrências</button>
        <button onClick={() => filtrarDados("vitimas")} className="py-2 px-4 bg-blue text-white rounded-lg">Vítimas</button>
        <button onClick={() => filtrarDados("municipios")} className="py-2 px-4 bg-blue text-white rounded-lg">Municípios</button>
      </div>
      {/* Tabela com dados filtrados */}
      <Tabela dados={dados} />
    </div>
  );
}

export default TabelaComFiltros;
