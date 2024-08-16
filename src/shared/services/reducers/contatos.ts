import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contatos } from "../../models/Contato_model";

type ContatoType = {
  contato: Contatos;
};

const initialState: ContatoType = {
  contato: {
    id: 0,
    nome: "",
    email: "",
    telefone: "",
    categoriaId: 1,
  },
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {
    obterContato: (state, action: PayloadAction<Contatos>) => {
      state.contato = action.payload;
    },
  },
});

export const { obterContato } = contatosSlice.actions;
export default contatosSlice.reducer;
