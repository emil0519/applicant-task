import Box from "@mui/material/Box";
// only import necessary component to optimized bundle size
import theme from "../theme";
import React from "react";
import { Typography } from "@mui/material";

export const Header = (): React.ReactElement => (
  <Box
    component="header"
    sx={{
      position: "sticky",
      top: 0,
      left: 0,
      width: "100%",
      height: "8%",
      backgroundColor: theme.palette.primary.dark,
      display: "flex",
      alignItems: "center",
      paddingLeft: 5,
      paddingY: 4,
      zIndex: 2,
    }}
  >
    <Typography
      component="h1"
      sx={{ fontSize: "40px", fontWeight: 700, color: "white" }}
    >
      Triathlon Result
    </Typography>
  </Box>
);
