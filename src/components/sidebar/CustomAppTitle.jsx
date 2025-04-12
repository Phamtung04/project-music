import React from "react";
import { Chip, Stack, Typography } from "@mui/material";

function CustomAppTitle() {
    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h6">Music</Typography>
        <Chip size="small" label="BETA" color="info" />
      </Stack>
    );
  }
  export default CustomAppTitle;