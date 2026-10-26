import Alumnos from "./pages/Alumnos";
import { Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ";
// import SelectorTema from "./components/SelectorTema"
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import Inicio from "./pages/Inicio";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="alumnos" element={<Alumnos />} />
        <Route path="ayuda" element={<FAQ />} />
      </Route>
    </Routes>
  )
}
export default App