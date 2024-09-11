import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { Filter } from "./components/Filter";

const App = (): React.ReactElement => {
  useEffect(() => {
    const fetchAthletes = async () => {
      const response = await fetch(
        "https://core.xterraplanet.com/api/application-task/cee4389b-1668-4e39-b500-3572f0982b09"
      );
      console.log(response);
    };
    fetchAthletes();
  }, []);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Filter />
      </ThemeProvider>
    </>
  );
};

export default App;
