import { Link } from "react-router-dom";
import { LinkButtonContainer } from "./style";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export const ReturnButton = () => {
  return (
    <LinkButtonContainer typelink={"remove"}>
      <Link to={"/"} className="button">
        <KeyboardReturnIcon />
      </Link>
    </LinkButtonContainer>
  );
};
