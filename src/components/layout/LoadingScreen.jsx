import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box, Typography } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Box>
      <Skeleton animation="wave" />
      <Skeleton variant="rectangular" height={118} />
      <Typography align="center" variant="subtitle2" color="#079FFF">
        Be Patient, Syncing Data...
      </Typography>
      <Skeleton variant="rectangular" height={118} />
      <Skeleton animation="wave" />
    </Box>
  );
};

export default LoadingScreen;
