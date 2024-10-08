import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React, { useCallback } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { dropDownOptionList } from "../constant";
import { SortEnum } from "../type";
import theme from "../theme";
import TextField from "@mui/material/TextField";
import debounce from "lodash.debounce";

interface PropsType {
  sortOption: SortEnum;
  setSortOption: (sortOption: SortEnum) => void;
  setSearchText: (searchText: string) => void;
}

export const Filter = ({
  sortOption,
  setSortOption,
  setSearchText,
}: PropsType): React.ReactElement => {
  const handleSelectOption = (e: SelectChangeEvent<SortEnum>) =>
    setSortOption(e.target.value as SortEnum);
  const debouncedSetSearchText = useCallback(
    debounce((value: string) => {
      setSearchText(value);
    }, 250),
    []
  );

  const handleSearchText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    debouncedSetSearchText(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        marginTop: 5,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
          justifyContent: "space-between",
        }}
      >
        <Typography component="h2" sx={{ fontSize: "40px", fontWeight: 700 }}>
          Search for Triathlon result
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 1,
            width: { xs: "100%", md: "auto" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            component="p"
            sx={{ fontSize: "16px", color: "#2e2d2f", marginTop: 1 }}
          >
            Base on
          </Typography>
          <Select
            labelId="sort-results-label"
            id="sort-results-select"
            value={sortOption}
            onChange={handleSelectOption}
            sx={{
              marginTop: 1,
              borderRadius: 4,
              width: { xs: "60%", md: "190px" },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.light,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.contrastText,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.contrastText,
              },
              ".MuiSvgIcon-root ": {
                fill: theme.palette.primary.light,
              },
            }}
          >
            {dropDownOptionList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            variant="outlined"
            placeholder="Name / Nationality"
            onChange={handleSearchText}
            sx={{
              marginTop: { xs: 0, md: 1 },
              width: { xs: "60%", md: "190px" },
              ".MuiOutlinedInput-root": {
                borderRadius: 4,
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.contrastText,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.contrastText,
                },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
