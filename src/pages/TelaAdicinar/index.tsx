import React from "react";
import { AdicionarContainer, FormContainer } from "./style";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  useGetContatosQuery,
  usePostContatoMutation,
} from "../../shared/services/api";
import { ReturnButton } from "../../shared/components/button/ReturnButton";
import { useNavigate } from "react-router-dom";
import { insertMaskInTel } from "../../shared/models/validation_tel";

export const TelaAdicionarNovoContato = () => {
  const query = useGetContatosQuery();
  const { data: listaContatos } = query;
  const [postContato] = usePostContatoMutation();

  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const navigate = useNavigate();

  let novoId = 0;
  if (listaContatos !== undefined) {
    const idString = listaContatos[listaContatos.length - 1].id;
    novoId = parseInt(idString) + 1;
  }

  const contato = {
    id: novoId.toString(),
    nome: nome,
    email: email,
    telefone: telefone,
    categoriaId: 1,
  };

  const addHandler = async () => {
    await postContato(contato);
    setNome("");
    setEmail("");
    setTelefone("");
    navigate("/paginaInicial");
  };

  return (
    <>
      <AdicionarContainer>
        <Box component="form" noValidate autoComplete="off">
          <p>Formulário para adicionar novo contato</p>
          <FormContainer>
            <TextField
              style={{ marginBottom: "16px" }}
              id="outlined-basic"
              fullWidth
              label="Nome"
              type="text"
              variant="outlined"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <TextField
              style={{ marginBottom: "16px" }}
              id="outlined-basic"
              fullWidth
              label="E-mail"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={{ marginBottom: "16px" }}
              id="outlined-basic"
              fullWidth
              label="Telefone"
              type="tel"
              variant="outlined"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <Stack spacing={2} direction="row" className="button_stack">
              <Button
                variant="outlined"
                color="error"
                onClick={() => navigate("/paginaInicial")}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  addHandler();
                }}
              >
                Adicionar
              </Button>
            </Stack>
          </FormContainer>
        </Box>
      </AdicionarContainer>
      <ReturnButton />
    </>
  );
};
