import { AppContext } from "./AppContext";
import { Button, Stack } from "@mui/material";
import { useContext } from "react";

const ResetButton = () => {
  const app = useContext(AppContext);

  return (
    <span>
      {app.variant === "contained" && (
        <Stack spacing={2} direction="row">
          <Button variant={app.variant} onClick={app.reset} color={"warning"}>
            Reset
          </Button>
        </Stack>
      )}
    </span>
  );
};

export default ResetButton;
