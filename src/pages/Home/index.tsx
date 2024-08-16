import * as React from "react";
import CardContato from "../../shared/components/contato/CardContato";
import { HomeContainer } from "./style";
import RemoveButton from "../../shared/components/button/RemoveButton";
import { AddButton } from "../../shared/components/button/AddButton";

// ToDo: adicionar os ícones de favoritos e emergência. estrela, e losango(ou outra coisa)
// ToDo: adicionar alguma biblioteca de loading no carregamento dos dados.

export const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <h1>Contatos</h1>
        <CardContato />
      </HomeContainer>
      <RemoveButton />
      <AddButton />
    </>
  );
};
