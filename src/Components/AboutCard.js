import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EditIcon from "./EditIcon";
import ImageCard from "./ImageCard";
// import { ModeEditOutlineOutlinedIcon } from "@mui/icons-material";
export default function AboutCard() {
  return (
    <Stack
      direction="column"
      sx={{
        border: 2,
        borderRadius: "15px",
        borderColor: "#c8c8c8",
        px: 3,
        py:2,
        bgcolor: "#fff",
        mt:4
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Experiance
        </Typography>
        <Box sx={{border:"1px solid", borderRadius:"10px", py: '5px', px:'8px'}}><EditIcon/></Box>
      </Stack>
      <ImageCard />
      <ImageCard />
    </Stack>
  );
}
