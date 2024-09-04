import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {
  useDeleteContatoMutation,
  useGetContatosQuery,
} from "../../shared/services/api";
import { ReturnButton } from "../../shared/components/button/ReturnButton";
import {
  RemoveContainer,
  ButtonRemoveContainer,
  ContatosListContainer,
} from "./style";
import ListaDoContato from "./ListaDoContato";

function TelaRemoverContatos() {
  const [deleteContato] = useDeleteContatoMutation();
  const query = useGetContatosQuery();
  const { data: listaContatos, isFetching } = query;

  const deleteHandler = async (rest: string[]) => {
    console.log(rest);
    for (var i = 0; i < rest.length; i++) {
      await deleteContato(rest[i]);
    }
  };

  const listaIds: string[] = [];

  const handleClickAddContatoDelList = (e: string, id: string) => {
    listaIds.push(id);
    console.log(listaIds);
  };

  return (
    <RemoveContainer>
      <h1>Remover contatos</h1>
      <ContatosListContainer>
        {isFetching ? (
          <p>Carregando...</p>
        ) : (
          Array.isArray(listaContatos) &&
          listaContatos?.map((contato) => (
            <div key={contato.id}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      key={contato.id}
                      defaultChecked={false}
                      value={contato.id}
                      onChange={(e) =>
                        handleClickAddContatoDelList(e.target.value, contato.id)
                      }
                    />
                  }
                  label={<ListaDoContato contato={contato} />}
                />
              </FormGroup>
            </div>
          ))
        )}
      </ContatosListContainer>
      <ButtonRemoveContainer>
        <Button
          onClick={() => deleteHandler(listaIds)}
          variant="contained"
          color="error"
        >
          Deletar contatos selecionados
        </Button>
      </ButtonRemoveContainer>
      <ReturnButton />
    </RemoveContainer>
  );
}

export default TelaRemoverContatos;
