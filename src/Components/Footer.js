import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FooterLinks from "./FooterLinks";
import map from "../Images/map.png";
import FbIcon from "./FbIcon";
import GitIcon from "./GitIcon";
import LnIcon from "./LnIcon";

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ bgcolor: "grey" }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        spacing={5}
        sx={{ color: "" }}
      >
        <FbIcon />
        <LnIcon />
        <GitIcon />
      </Stack>
      <Box>
        <FooterLinks />
      </Box>
      <Box>
        <FooterLinks />
      </Box>
      <Box>
        <img src={map} alt="map image" style={{ height: "200px" , width:"400px" , borderRadius:"8px"}} />
      </Box>
    </Stack>
  );
}
