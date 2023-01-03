import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Check from "./Check";

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
      spacing={2}
    >
      <Stack direction="row">
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Skills
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{width:"80%"}}>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Check />
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#d3d3d3",
                px: "15px",
                py: "5px",
                borderRadius: "20px",
              }}
            >
              Java
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Check />
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#d3d3d3",
                px: "15px",
                py: "5px",
                borderRadius: "20px",
              }}
            >
              Managing Skills
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Check />
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#d3d3d3",
                px: "15px",
                py: "5px",
                borderRadius: "20px",
              }}
            >
              C++
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Check />
            <Typography
              variant="h6"
              sx={{
                bgcolor: "#d3d3d3",
                px: "15px",
                py: "5px",
                borderRadius: "20px",
              }}
            >
              Competitive programing
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {/* <Stack direction="column" justifyContent="space-between" sx={{m:1}}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Check/>
              <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>Java</Typography>  
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Check/>
              <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>Managing Skills</Typography>  
            </Stack>
        </Stack>
        <Stack direction="column" justifyContent="space-between"  sx={{m:1}}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Check/>
            <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>C++</Typography>  
          </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Check/>
              <Typography variant="h6" sx={{bgcolor:'#d3d3d3', px:'15px',py:'5px',borderRadius:"20px"}}>Competitive programing</Typography>  
            </Stack> 
        </Stack>         */}
    </Stack>
  );
}
