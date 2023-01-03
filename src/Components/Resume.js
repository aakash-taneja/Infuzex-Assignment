import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import UploadIcon from './UploadIcon'
import DownloadIcon from './DownloadIcon'
import ResIcon from "./ResIcon";

export default function Resume() {
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
          Resume
        </Typography>
      </Stack>
      <Stack sx={{display:"flex", flexDirection:{xs:"column", md:"row"}}}>
        <Stack direction="row">
          <ResIcon />
          <span style={{ marginLeft: "10px" }}><Typography variant="h6">portfolio.resume.pdf</Typography></span>
        </Stack>
        <Stack direction="row" justifyContent="start">
          <Button
            variant="contained"
            sx={{
              boxShadow: 0,
              bgcolor: "#d3d3d3",
              color: "rgba(0, 69, 199, 1)",
              py: "5px",
              px: "15px",
              borderRadius: "20px",
              mx: {xs:"0px",md:"20px"},
              mt: {xs:"20px",md:"0px"}
            }}
          >
            <UploadIcon /> <span style={{ marginLeft: "10px" }}>Upload</span>
          </Button>
          <Button
            variant="contained"
            sx={{
              boxShadow: 0,
              bgcolor: "rgba(0, 69, 199, 1)",
              color: "#d3d3d3",
              py: "5px",
              px: "15px",
              borderRadius: "20px",
              mt: {xs:"20px",md:"0px"}
            }}
          >
            <DownloadIcon /> <span style={{ marginLeft: "10px" }}>Download</span>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
