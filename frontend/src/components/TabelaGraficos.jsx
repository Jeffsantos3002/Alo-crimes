import { useState, useEffect } from "react";
import Detalhes from "./Detalhes";
import ocorrencias from "../../data/ocorrencias";
import vitimas from "../../data/vitimas";
import municipios from "../../data/municipios";

function TabelaGraficos() {
    return (
      <div className="w-full bg-white rounded-xl px-2.5 py-4">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="font-medium text-base text-black">Crimes</th>
                <th className="font-medium text-base text-black">Vítimas</th>
                <th className="font-medium text-base text-black">Municípios</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
  
  export default TabelaGraficos;
  