import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import ReplayIcon from "@mui/icons-material/Replay";

export const Error = ({
  errorAction,
}: {
  errorAction: () => void;
}): React.ReactElement => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter" || e.key === " ") {
      errorAction();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "30vh",
        textAlign: "center",
        gap: 3,
      }}
    >
      <Typography component="h2" sx={{ fontSize: "30px", fontWeight: 700 }}>
        Something went wrong, please try again.
      </Typography>
      <Box
        sx={{ cursor: "pointer" }}
        onClick={errorAction}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label="Retry fetching data"
        title="Retry fetching data"
      >
        <ReplayIcon fontSize="large" />
      </Box>
    </Box>
  );
};
