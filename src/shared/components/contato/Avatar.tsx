import * as React from "react";
import { Avatar as AvaImg } from "@mui/material";
import Stack from "@mui/material/Stack";

export type inicialProps = {
  inicial: string;
};

function Avatar({ inicial }: inicialProps) {
  return (
    <Stack direction="row" spacing={2}>
      <AvaImg>{inicial.slice(0, 1).toUpperCase()}</AvaImg>
    </Stack>
  );
}

export default Avatar;
