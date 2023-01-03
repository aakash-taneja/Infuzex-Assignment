import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function FooterLinks() {
  return (
    <Stack direction="column" alignItems="space-between">
      <Box>
        <Typography variant="h5" color="white" underline="1px">Useful Links</Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="white">Home</Typography>
        <Typography variant="h5" color="white">About</Typography>
        <Typography variant="h5" color="white">Services</Typography>
        <Typography variant="h5" color="white">Privacy Policy</Typography>
        <Typography variant="h5" color="white">Terms and Conditions</Typography>
      </Box>
    </Stack>
  );
}
