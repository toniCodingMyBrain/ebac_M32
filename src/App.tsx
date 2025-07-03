import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { HeaderContainer } from "./shared/containers/header";
import { GlobalStyle } from "./shared/layouts/GlobalStyle";

/**
 * Todo: Resolver bug que ao atualizar contato, o número de tel e o e-mail desaparecem
 */

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <HeaderContainer />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};
