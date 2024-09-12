import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";

export const Error = ({
  errorAction,
}: {
  errorAction: () => void;
}): React.ReactElement => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      marginTop: "30vh",
      textAlign: "center",
      gap: 3,
    }}
  >
    <Typography component="h2" sx={{ fontSize: "30px", fontWeight: 700 }}>
      Something went wrong, please try again.
    </Typography>
    <Box sx={{ cursor: "pointer" }} onClick={errorAction}>
      <ReplayIcon fontSize="large" />
    </Box>
  </Box>
);
