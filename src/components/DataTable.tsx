import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ResultListType, SortEnum } from "../type";
import { getSplitTime } from "../utils";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

export const DataTable = ({
  resultList,
  searchText,
}: {
  resultList: ResultListType[];
  searchText: string;
}): React.ReactElement => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isShowAllResult, setIsShowAllResult] = useState<boolean>(true);

  useEffect(() => {
    resetPagination();
  }, [searchText]);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void => setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const resetPagination = (): void => {
    setPage(0);
    setRowsPerPage(10);
  };

  const handleShowAllResult = (): void => {
    setIsShowAllResult((prevState) => !prevState);
    resetPagination();
  };

  return (
    <TableContainer component={Paper} sx={{ marginY: 3 }}>
      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
        <TablePagination
          sx={{ visibility: isShowAllResult ? "hidden" : "visible" }}
          rowsPerPageOptions={[10, 50, 100]}
          component="div"
          count={resultList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <FormControlLabel
          control={
            <Checkbox checked={isShowAllResult} onClick={handleShowAllResult} />
          }
          label="Show all result"
        />
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="Triathlon result table">
        <TableHead>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Division</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Total time</TableCell>
            <TableCell>Swim time</TableCell>
            <TableCell>Bike time</TableCell>
            <TableCell>Run time</TableCell>
            <TableCell>T1 time</TableCell>
            <TableCell>T2 time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(isShowAllResult
            ? resultList
            : resultList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
          ).map((result) => (
            <TableRow
              key={`${result.first_name}-${result.last_name}-${result.nationality}-${result.total_time}`}
            >
              <TableCell>{result.first_name}</TableCell>
              <TableCell>{result.last_name}</TableCell>
              <TableCell>{result.gender}</TableCell>
              <TableCell>{result.division}</TableCell>
              <TableCell>{result.nationality}</TableCell>
              <TableCell>{result.total_time}</TableCell>
              <TableCell>
                {getSplitTime(result.splits, SortEnum.Swim_Time)}
              </TableCell>
              <TableCell>
                {getSplitTime(result.splits, SortEnum.Bike_Time)}
              </TableCell>
              <TableCell>
                {getSplitTime(result.splits, SortEnum.Run_time)}
              </TableCell>
              <TableCell>
                {getSplitTime(result.splits, SortEnum.T1_time)}
              </TableCell>
              <TableCell>
                {getSplitTime(result.splits, SortEnum.T2_time)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
