import Tabela from "../components/Tabela";

function Home(){
  return(
    <div className="py-14 space-y-14 flex flex-col items-center justify-center px-6 bg-bgPage">
      <h2 className="flex flex-row">Aqui, você pode encontrar os índices de criminalidade dos <p className="text-blue font-bold px-1">municípios</p> e <p className="text-blue font-bold px-1">estados</p> de todo o Brasil</h2>
      <Tabela/>
    </div>
  )
}
export default Home;