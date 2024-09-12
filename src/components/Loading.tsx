import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import React from "react";

export const Loading = (): React.ReactElement => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      marginTop: "30vh",
    }}
  >
    <Typography component="h2" sx={{ fontSize: "40px", fontWeight: 700 }}>
      Loading
    </Typography>
    <CircularProgress />
  </Box>
);
