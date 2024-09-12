import Box from "@mui/material/Box";
// only import necessary component to optimized bundle size
import theme from "../theme";
import xterraLogo from "../assets/xterraLogo.svg";
import React from "react";

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
    <Box
      component="img"
      src={xterraLogo}
      alt="Xterra Logo"
      sx={{
        height: "auto",
        width: "40%",
        maxWidth: "200px",
      }}
    ></Box>
  </Box>
);
