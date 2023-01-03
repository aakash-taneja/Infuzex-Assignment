import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import apple from "../Images/apple.jpg"

export default function Company() {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{my:"5px"}}>
      <Stack direction="row" justifyContent="space-between">
        <img src={apple} alt="companyimage" style={{borderRadius: "50%",overflow:'hidden',objectFit: 'cover',height:' 50px',width: '50px', marginRight:"10px"}}/>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 500 , fontSize:"14px"}}>
            Apple
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#c0c0c0" ,fontSize:"11px"}}>
            Front End Developer
          </Typography>
        </Box>
      </Stack>
      <Button
        variant="contained"
        sx={{
          boxShadow: 0,
          bgcolor: "rgba(87, 255, 85, 0.5)",
          color: "rgba(0, 190, 14, 1)",
					py:"2px",
					px:"5px",
					my:"5px",
					borderRadius:"10px",
					fontSize:"10px",
					lineHeight:"10px"          
        }}
      >
        shortlisted
      </Button>
    </Stack>
  );
}
