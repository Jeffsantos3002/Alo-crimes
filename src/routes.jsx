import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Graficos from "./pages/Graficos"
import Filtros from "./pages/Filtros"
import ComoUtilizar from "./pages/ComoUtilizar"

function MainRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/graficos" element={<Graficos/>}/>
      <Route path="/filtros" element={<Filtros/>}/>
      <Route path="/como-utilizar" element={<ComoUtilizar/>}/>
    </Routes>
  )
} 
export default MainRoutes