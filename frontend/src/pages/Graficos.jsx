import TabelaGraficos from '../components/TabelaGraficos';
import GraficoPizza from '../components/graficos/GraficoPizza';

function Graficos(){
  
  const filters = [null, null, null, null, null];

  return(
    <div className="py-14 space-y-14 flex flex-col items-center justify-center px-6 bg-bgPage">
      <h2 className="font-bold text-2xl text-blue">GRÁFICOS</h2>
      <div className="grid grid-cols-5 gap-6">
        {Array.from({ length: 15 }).map((_, index) => (
          <GraficoPizza key={index} filtro1={filters[0]} filtro2={filters[1]} filtro3={filters[2]} filtro4={filters[3]} filtro5={filters[4]} />
        ))}
      </div>
      <TabelaGraficos/>
    </div>    
  )
}

export default Graficos;
