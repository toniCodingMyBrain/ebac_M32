import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { ContatoButtonsContainer } from "./style";
import { Link } from "react-router-dom";
import ModalEdicao from "../../components/modalEdicao";
import { useGetContatosQuery } from "../../services/api";
import { useAppDispatch } from "../../services/hooks";
import { modifyDialog } from "../../services/reducers/dialog";
import { obterContato } from "../../services/reducers/contatos";

export type IdProps = {
  id: number;
};

function ContatoButtons({ id }: IdProps) {
  const query = useGetContatosQuery();
  const { data: listaContatos } = query;
  const dispatch = useAppDispatch();

  const handleClickOpen = () => {
    dispatch(modifyDialog(true));
    if (listaContatos && listaContatos.length > 0) {
      const contato = listaContatos.find((contato) => contato.id === id);
      if (contato) {
        dispatch(obterContato(contato));
      }
    }
  };

  return (
    <ContatoButtonsContainer>
      <IconButton aria-label="edit" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <ModalEdicao />
      <Link to={"/"}>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      </Link>
    </ContatoButtonsContainer>
  );
}

export default ContatoButtons;
