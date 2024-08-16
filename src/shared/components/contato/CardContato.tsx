import Avatar from "./Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ContatoButtons from "../../containers/contatoButtons/contatoButtons";
import { ContatoCardContainer, TelefoneContainer } from "./style";
import { useGetContatosQuery } from "../../services/api";

// ToDo: adicionar link com rota para ir direto para o whatsapp da conversa.
// ToDo: criar tela modal ou dialog para ao clicar no botão de lápis abrir um editor.
// ToDo: a tela modal ou dialog deve abrir com os dados do contato dentro de inputs.
// ToDo: para cada contato para serem editados ou não, também deve conter o botão de adicionar novo número.

function CardContato() {
  const query = useGetContatosQuery();
  const { data: listaContatos, isFetching } = query;

  return (
    <>
      {isFetching ? (
        <p>Carregando...</p>
      ) : (
        listaContatos?.map((contato) => (
          <ContatoCardContainer key={contato.id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Avatar inicial={contato.nome} />
                    <h3>{contato.nome}</h3>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List
                  sx={{
                    bgcolor: "#f2f2f2",
                    padding: "0",
                  }}
                >
                  <ListItem
                    disableGutters
                    secondaryAction={<ContatoButtons id={contato.id} />}
                  >
                    <TelefoneContainer>
                      <ListItemText primary={`${contato.telefone}`} />
                    </TelefoneContainer>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
          </ContatoCardContainer>
        ))
      )}
    </>
  );
}

export default CardContato;
