import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { modifyDialog } from "../../services/reducers/dialog";
import { useUpdadeContatoMutation } from "../../services/api";
import { RootReducer } from "../../services";

// ToDo: implementar lista de números de telefones. Para que possa ser adicionado mais de um.
// Isso pode ser feito utilizando um botão de + ao lado.
// ToDo: colocar botões de mudança de status, acima do input, sendo:
// estrela para favorito.
// losango ou um icone de enfermagem para indicar contato de emergência.
// e o padrão normal caso não marque nenhum.
// isto deve automaticamente modificar a mensagem, sendo a mais forte a de emergência.
// ToDo: adicionar biblioteca Toastify para renderizar mensagens de feedback das funções.

function ModalEdicao() {
  const setIsOpen: boolean = useAppSelector((state: RootReducer) => state.dialog.isOpen);
  const getContato = useAppSelector((state: RootReducer) => state.contatos.contato);
  const dispatch = useAppDispatch();
  const [updateContato] = useUpdadeContatoMutation();

  const [thisName, setThisName] = React.useState(getContato.nome);
  const [thisEmail, setThisEmail] = React.useState(getContato.email);
  const [thisNumber, setThisNumber] = React.useState(getContato.telefone);

  React.useEffect(() => {
    if (getContato) {
      setThisName(getContato.nome || "");
      setThisEmail(getContato.email || "");
      setThisNumber(getContato.telefone || "");
    }
  }, [getContato]);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!getContato || typeof getContato.id === "undefined") {
      console.log("Dados do contato inválidos ou ausentes para atualização.");
      dispatch(modifyDialog(false));
      return;
    }

    const updatedContato = {
      id: getContato.id,
      nome: thisName,
      email: thisEmail,
      telefone: thisNumber,
      categoriaId: getContato.categoriaId,
    };

    console.log("Enviando para atualização: ", updatedContato);
    await updateContato(updatedContato);

    dispatch(modifyDialog(false));
    window.scrollTo(0, 0);
  };

  const categoryContato = (catId: string | number | undefined) => {
    if (catId === 1) {
      return `Contato normal.`;
    } else if (catId === 2) {
      return `Contato favorito.`;
    } else {
      return `Contato de emergência.`;
    }
  };

  const cancelHandler = () => {
    dispatch(modifyDialog(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={setIsOpen}
        onClose={() => dispatch(modifyDialog(false))}
        PaperProps={{
          component: "form",
          onSubmit: handleFormSubmit,
        }}
      >
        <DialogTitle color="primary">Atualize este contato</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
              <InputLabel htmlFor="component-outlined">Nome</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue={getContato.nome}
                label="Nome"
                onChange={(e) => {
                  if (e.target.value !== e.target.defaultValue) {
                    setThisName(e.target.value);
                  } else {
                    setThisName(getContato.nome);
                  }
                }}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="component-outlined">E-Mail</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue={getContato.email}
                label="E-mail"
                onChange={(e) => {
                  if (e.target.value !== e.target.defaultValue) {
                    setThisEmail(e.target.value);
                  } else {
                    setThisEmail(getContato.nome);
                  }
                }}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Telefone{` (s)`}</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue={getContato.telefone}
                label="Telefone"
                onChange={(e) => {
                  if (e.target.value !== e.target.defaultValue) {
                    setThisNumber(e.target.value);
                  } else {
                    setThisNumber(getContato.telefone);
                  }
                }}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="component-outlined">Categoria do contato</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue={categoryContato(getContato.categoriaId)}
                label="Contato normal"
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={cancelHandler}>
            Cancelar
          </Button>
          <Button type="submit">Concluir</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default ModalEdicao;
