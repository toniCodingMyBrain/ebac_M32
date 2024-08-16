import { Link } from "react-router-dom";
import { LinkButtonContainer } from "./style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function RemoveButton() {
  return (
    <LinkButtonContainer typelink={"remove"}>
      <Link to={"/removerContato"} className="button">
        <DeleteOutlineIcon />
      </Link>
    </LinkButtonContainer>
  );
}

export default RemoveButton;
