import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { HeaderContainer } from "./shared/containers/header";
import { GlobalStyle } from "./shared/layouts/GlobalStyle";

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
