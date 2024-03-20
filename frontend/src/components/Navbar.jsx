import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import logoBlue from '../assets/logo-blue.svg'


function Navbar(){

  const rotas = [      
    {
      "to": "/",
      "text": "Home"
    },
    {
      "to": "/filtros",
      "text": "Filtros"
    },
    {
      "to": "/graficos",
      "text": "Gráficos"
    },
    {
      "to": "/como-utilizar",
      "text": "Como Utilizar"
    }    
  ]
    
  return(
    <header className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
          {/* NavBar */}
        <div className="w-full lg:px-12 navbar bg-blue">
          {/* Icone */}
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" stroke="white" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div> 
          <div className="navbar-start w-full flex flex-row justify-center lg:justify-start">
            <p className="px-2 mx-2 text-white font-bold text-2xl">Alô Crimes</p>
            <img src={logo} alt="logo"/>
          </div>
          <div className="w-full navbar-end menu menu-horizontal hidden lg:flex justify-end hidden space-x-2.5">

            {rotas.map((page, index)=>(
                <Link to={page.to} className="text-white font-bold uppercase text-base" key={index}>{page.text}</Link>
            ))}

          </div>
        </div>
      </div> 

        {/* Sidebar lateral*/}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
        <div className="menu w-80 min-h-full bg-base-200 space-y-4 pt-4">
          <div className="flex flex-row justify-center mb-2.5">
            <div className="text-blue font-bold text-2xl mr-2.5">Alô Crimes</div>
            <img src={logoBlue} alt="logo"/>
          </div>
          {rotas.map((page, index)=>(
            <Link to={page.to} className="font-bold uppercase text-base" key={index}>{page.text}</Link>
          ))}
        </div>
      </div>

    </header>
  )
}

export default Navbar;