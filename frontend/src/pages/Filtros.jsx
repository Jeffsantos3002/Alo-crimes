import Tabela from "../components/Tabela";
import TabelaComFiltros from "../components/TabelaComFiltros";

function Filtros(){
  return(
    <div className="py-14 space-y-14 flex flex-col items-center justify-center px-6 bg-bgPage">
      <h2 className="flex flex-row text-2xl text-blue font-thin">Filtros</h2>
      <TabelaComFiltros/>
    </div>
  )
}
export default Filtros;