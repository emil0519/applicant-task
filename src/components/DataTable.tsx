import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ResultListType, SortEnum } from "../type";
import { getSplitTime } from "../utils";

export const DataTable = ({
  resultList,
}: {
  resultList: ResultListType[];
}): React.ReactElement => (
  <TableContainer component={Paper} sx={{ marginTop: 3 }}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
        {resultList.map((result) => (
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
