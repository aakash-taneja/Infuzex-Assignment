import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function FooterLinks() {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{height:{md:"180px"}}}>
      <Box>
        <Typography variant="h5" color="white" underline="1px" sx={{fontSize:"18px"}}>Useful Links</Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="white" sx={{fontSize:"14px", my:"5px"}}>Home</Typography>
        <Typography variant="h5" color="white" sx={{fontSize:"14px", my:"5px"}}>About</Typography>
        <Typography variant="h5" color="white" sx={{fontSize:"14px", my:"5px"}}>Services</Typography>
        <Typography variant="h5" color="white" sx={{fontSize:"14px", my:"5px"}}>Privacy Policy</Typography>
        <Typography variant="h5" color="white" sx={{fontSize:"14px", my:"5px"}}>Terms and Conditions</Typography>
      </Box>
    </Stack>
  );
}
