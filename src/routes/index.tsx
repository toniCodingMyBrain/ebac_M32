import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { TelaAdicionarNovoContato } from "../pages/TelaAdicinar";
import TelaRemoverContatos from "../pages/TelaRemover";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<HomePage />} />
      <Route path="/adicionarContato" element={<TelaAdicionarNovoContato />} />
      <Route path="/removerContato" element={<TelaRemoverContatos />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
