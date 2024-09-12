import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Header } from "./components/Header";
import { useState } from "react";
import { Filter } from "./components/Filter";
import { DataTable } from "./components/DataTable";
import Container from "@mui/material/Container";
import { SortEnum } from "./type";
import { useFetchResult } from "./hooks/useFetchResult";
import { Loading } from "./components/Loading";
import { Error } from "./components/Error";

const App = (): React.ReactElement => {
  const { resultList, isLoading, isError, fetchAthletes } = useFetchResult();

  const [selectedOption, setSelectionOption] = useState<SortEnum>(
    SortEnum.Total_Time
  );
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />

        <Container maxWidth="xl">
          {isLoading && <Loading />}
          {isError && <Error errorAction={fetchAthletes} />}
          {!isLoading && !isError && resultList && (
            <>
              <Filter
                selectedOption={selectedOption}
                setSelectionOption={setSelectionOption}
              />
              <DataTable />
            </>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
