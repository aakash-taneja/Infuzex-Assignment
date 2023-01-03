import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FooterLinks from "./FooterLinks";
import map from "../Images/map.png";
import wfb from "../Images/wfb.svg"
import win from "../Images/win.svg"
import wln from "../Images/wln.svg"

export default function Footer() {
  return (
    <Stack      
      sx={{ bgcolor: "#333" , pb:"100px", pt:"50px", display:"flex", justifyContent:"space-around", alignItems:{xs:"center"},flexDirection:{xs:"column",md:"row"}}}
    >
      <Stack
        direction="row"
        justifyContent="center"
        spacing={5}        
        sx={{ color: "",width:{xs:"100%",md:"30%"} }}
      >
        <img src={wfb} height="50px"/>
        <img src={wln} height="50px"/>
        <img src={win} height="50px"/>
      </Stack>
      <Stack sx={{display:"flex", flexDirection:"row", justifyContent:{xs:"space-around",md:"space-between"},width:{xs:"100%",md:"30%"}, my:{xs:"20px",md:"0px"}}}>
        <Box>
          <FooterLinks />
        </Box>
        <Box>
          <FooterLinks />
        </Box>
      </Stack>
      <Stack sx={{ display:"flex", alignItems:"center", width:{xs:"100%",md:"30%"}}} >
        <img src={map} alt="map image" style={{ height: "200px" , width:"400px" , borderRadius:"8px"}} />
      </Stack>
    </Stack>
  );
}
