import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { DataTable } from "./components/DataTable";
import Container from "@mui/material/Container";
import { SortEnum } from "./type";

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
  const [selectedOption, setSelectionOption] = useState<SortEnum>(
    SortEnum.Total_Time
  );
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="xl">
          <Filter
            selectedOption={selectedOption}
            setSelectionOption={setSelectionOption}
          />
          <DataTable />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
