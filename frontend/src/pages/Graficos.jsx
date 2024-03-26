import GraficoPizza from '../components/GraficoPizza';

function Graficos(){
  return(
    <div className="py-14 space-y-14 flex flex-col items-center justify-center px-6 bg-bgPage">
      <h2 className="font-bold text-2xl text-blue">GRÁFICOS</h2>
      <GraficoPizza filtro1={null} filtro2={null} filtro3={null} filtro4={null} filtro5={null}/>
    </div>    
  )
}

export default Graficos;
