import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Company from "./Company";

export default function Skills() {
  return (
    <Stack
      sx={{
        border: 2,
        borderRadius: "15px",
        borderColor: "#c8c8c8",
        px: 3,
        py: 2,
        bgcolor: "#fff",
        my: 4,
      }}
    >
      <Stack direction="row">
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Skills
        </Typography>
      </Stack>
      <Company />
      <Company />
      <Company />
      <Company />
      <Button
        variant="contained"
        sx={{
          boxShadow: 0,
          color: "#fff",
          py: "5px",
          bgcolor:"rgba(0, 69, 199, 1)",
          px: "15px",
          borderRadius: "20px",
          mx: "20px",
          my: "5px",          
        }}
      >
        See All
      </Button>
    </Stack>
  );
}
