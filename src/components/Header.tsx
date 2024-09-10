import Box from "@mui/material/Box";
import theme from "../theme";
import xterraLogo from "../assets/xterraLogo.svg";

export const Header = () => (
  <Box
    component="header"
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "8%",
      backgroundColor: theme.palette.primary.light,
      display: "flex",
      alignItems: "center",
      paddingLeft: 5,
      paddingY: 4,
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
