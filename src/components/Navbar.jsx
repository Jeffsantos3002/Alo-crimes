import { Link } from "react-router-dom";

function Navbar(){
    
  return(
    <header>
      <div>

      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/filtros'>Filtros</Link>
        <Link to='/graficos'>Graficos</Link>
        <Link to='/como-utilizar'>Como Utilizar</Link>
      </div>
    </header>
   
  )
}

export default Navbar;